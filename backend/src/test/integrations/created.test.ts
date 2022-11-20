import {  describe } from "mocha";
import chai, { expect } from "chai";
import chaiHTTP from "chai-http";
import app from "../../app";
import {
	contaBancariaInvalida,
	pessoaInvalida,
	bodyValid,
} from "../mocks/index";
import prisma from "../../database/prismaConnection";
chai.use(chaiHTTP);

describe("teste de integração  rota usuario", () => {
	describe("casos de falha", () => {
		it("deve retornar um erro 400ao tentar requisição com body vazio", async () => {
			const req = await chai.request(app).post("/create").send({});
			expect(req.status).to.be.equal(400);
			expect(req.body).to.be.an("object");
			expect(req.body).to.have.property("message");
		});
		it("deve retornar um erro 400 ao tentar requisição com body incompleto com com pessoa invalida", async () => {
			const req = await chai
				.request(app)
				.post("/create")
				.send({ pessoa: pessoaInvalida });
			expect(req.status).to.be.equal(400);
			expect(req.body).to.be.an("object");
			expect(req.body).to.have.property("message");
			expect(req.body.message).to.be.equal(
				'O campo "nomeCompleto" não pode ser vazio'
			);
		});

		it("deve retornar um erro 400 ao tentar requisição com body completo mas com conta bancaria invalida", async () => {
			const req1 = await chai
				.request(app)
				.post("/create")
				.send(contaBancariaInvalida);

			expect(req1.status).to.be.equal(400);
			expect(req1.body).to.be.an("object");
			expect(req1.body).to.have.property("message");
			expect(req1.body.message).to.be.equal(
				'O campo "isPix" é obrigatório'
			);
		});
	});
	describe("casos de sucesso", () => {
		it("deve retornar um status 200 ao tentar requisição com body completo", async () => {
			const req = await chai.request(app).post("/create").send(bodyValid);
			expect(req.status).to.be.equal(200);
			expect(req.body).to.be.an("object");
			expect(req.body).to.have.property("message");
			expect(req.body.message).to.be.equal("usuario criado com sucesso");
		});
		after(async () => {
		await prisma.documento.deleteMany();
			await prisma.endereco.deleteMany();
			await prisma.telefone.deleteMany();
			await prisma.pix.deleteMany();
			await prisma.relacionamento.deleteMany();
		});
		after(async () => {
			await prisma.pessoaJuridica.deleteMany();
			await prisma.contaBancaria.deleteMany();
			await prisma.usuario.delete({
				where: {
					email: bodyValid.usuario.email,
				},
			});
			await prisma.pessoa.delete({
				where: {
					nomeCompleto: bodyValid.pessoa.nomeCompleto,
				},
			});
		});
		it("deve retornar um status 200 ao tentar requisição com body completo", async () => {
			await chai.request(app).post("/create").send(bodyValid);
			const req2 = await chai.request(app).post("/create").send(bodyValid);
			expect(req2.status).to.be.equal(400);
			expect(req2.body).to.be.an("object");
			expect(req2.body).to.have.property("message");
			expect(req2.body.message).to.be.equal("a chave Pessoas_nome_completo_key duplicado(a)");
		})
	});
});

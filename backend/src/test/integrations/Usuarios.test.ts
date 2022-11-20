import { describe } from "mocha";
import chai, { expect } from "chai";
import chaiHTTP from "chai-http";
import app from "../../app";
import { password_correct, password_icorrect, username_correct, username_icorrect } from "../mocks/index";
chai.use(chaiHTTP);

describe("teste de integração  rota usuario", () => {
	describe("casos de falha", () => {
		it("deve retornar um erro 404 ao tentar logar  um usuario ou senha errado ", async () => {
			const res = await chai.request(app).post("/usuario/login").send({
				username: username_icorrect,
				password: password_icorrect,
			});
			expect(res.status).to.be.equal(404);
			expect(res.body).to.be.an("object");
			expect(res.body).to.have.property("message");
			expect(res.body.message).to.be.equal("Usuário ou Senha Incorreta");
		});
	});
	it("deve retornar um erro 400 ao tentar logar  com um usuario ou senha vazio ", async () => {
		const res = await chai.request(app).post("/usuario/login").send({
			username: "",
			password: password_icorrect,
		});
		const res2 = await chai.request(app).post("/usuario/login").send({
			username: username_icorrect,
			password: "",
		});
		expect(res.status).to.be.equal(400);
		expect(res.body).to.be.an("object");
		expect(res.body).to.have.property("message");
		expect(res.body.message).to.be.equal("Username is required");
		expect(res2.status).to.be.equal(400);
		expect(res2.body).to.be.an("object");
		expect(res2.body).to.have.property("message");
		expect(res2.body.message).to.be.equal("Password is required");
	});
	describe("casos de sucesso", () => {
		it("quando as credencias estiver correta deve retornar um token ", async () => {
			const res = await chai.request(app).post("/usuario/login").send({
				username: username_correct,
				password: password_correct,
			});
			expect(res.status).to.be.equal(200);
			expect(res.body).to.be.an("object");
			expect(res.body).to.have.property("token");
		});
	});
});

import { IcreatedJuridic } from "../interfaces/index";
import prisma from "../database/prismaConnection";
import { ErrorApi } from "../classes/classeError";

const createPeapleJuridica = async (obj: IcreatedJuridic) => {
	try {
		await prisma.pessoa.create({
			data: {
				cpfCnpj: obj.pessoa.cpfcnpj,
				dataNascimento: new Date(obj.pessoa.dataDeNascimento),
				estadoCivil: obj.pessoa.estadoCivil,
				nacionalidade: obj.pessoa.nacionalidade,
				naturalidade: obj.pessoa.naturalidade,
				nomeCompleto: obj.pessoa.nomeCompleto,
				sexo: obj.pessoa.sexo,
				situacao: obj.pessoa.situação,
				...(obj.pessoa.isJuridic && {
					PessoasJuridica: {
						create: {
							inscricaoEstadual: obj.pessoa.inscricaoEstadual,
							nomeFantasia: obj.pessoa.nomeFantasia,
							ramo: obj.pessoa.ramo,
						},
					},
				}),
				enderecos: {
					createMany: {
						data: obj.endereco,
					},
				},
				telefones: {
					createMany: {
						data: obj.telefone,
						skipDuplicates: true,
					},
				},
				Usuario: {
					create: {
						username: obj.usuario.username,
						email: obj.usuario.email,
						role: obj.usuario.role,
						senha: obj.usuario.password,
					},
				},
			},
		});
		Promise.all(
			obj.relacionamento.map(async (item) => {
				await prisma.relacionamento.create({
					data: {
						tipo: item.tipo,
						pessoa: {
							connect: {
								nomeCompleto: obj.pessoa.nomeCompleto,
							},
						},
						pessoaRelacionada: {
							connect: {
								id: Number(item.value),
							},
						},
					},
				});
			})
		);
		Promise.all(
			obj.contas_bancarias.map(async (item) => {
				await prisma.contaBancaria.create({
					data: {
						agencia: item.agencia,
						banco: item.nomeBanco,
						conta: item.numeroConta,
						principal: item.principal,
						contaBancaria: {
							connect: {
								nomeCompleto: obj.pessoa.nomeCompleto,
							},
						},
						...(item.isPix && {
							pix: {
								create: {
									tipo: item.pix?.tipo,
									chave: item.pix?.chave,
								},
							},
						}),
					},
				});
			})
		);
		return "usuario cadastrado com sucesso";
	} catch (error) {
		throw new ErrorApi("Erro interno", 500);
	}
};

export default createPeapleJuridica;

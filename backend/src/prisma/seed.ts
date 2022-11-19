import prisma from "../database/prismaConnection";

async function main() {
	await prisma.pessoa.create({
		data: {
			cpfCnpj: "12345678910",
			dataNascimento: new Date("1990-01-01"),
			estadoCivil: "SOLTEIRO",
			nacionalidade: "BRASILEIRA",
			naturalidade: "BRASILEIRA",
			nomeCompleto: "Fulano de Tal",
			sexo: "MASCULINO",
			situacao: "ATIVO",
			Usuario: {
				create: {
					username: "admin",
					email: "admin@admin.com",
					role: "admin",
					senha: "admin",
				},
			},
		},
	});
}

main()
	.then(() => console.log('Seed executado com sucesso!'))
	.catch((e) => {
		console.log(e.message);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

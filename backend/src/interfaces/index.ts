export interface IcreatedJuridic {
	pessoa: {
		isJuridic?: boolean;
		ramo: string;
		nomeCompleto: string;
		dataDeNascimento: string;
		sexo: string;
		estadoCivil: string;
		nacionalidade: string;
		naturalidade: string;
		situação: string;
		cpfcnpj: string;
		nomeFantasia: string;
		inscricaoEstadual: string;
	};
	endereco: [
		{
			endereco: string;
			principal: boolean;
		}
	];
	telefone: [
		{
			numero: string;
			principal: boolean;
		}
	];
	relacionamento: [
		{
			value: string;
			tipo: string;
		}
	];
	usuario: {
		username: string;
		email: string;
		password: string;
		role: "admin" | "user";
	};
	contas_bancarias: [
		{
				nomeBanco: string,
				numeroConta: string,
				agencia: string,
				isPix: boolean,
				principal: boolean,
				pix: {
					tipo: string,
					chave: string
				}
		}
	],
	docs: {
		name: string,
		numeros: string
	}
}

export interface contas_bancarias {
			nomeBanco: string,
			numeroConta: string,
			agencia: string,
			isPix: boolean,
			principal: boolean,
			pix: {
				tipo: string,
				chave: string
			}
	}

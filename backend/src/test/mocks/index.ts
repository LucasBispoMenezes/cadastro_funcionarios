export const username_icorrect = "username_icorrect";
export const password_icorrect = "password_icorrect";
export const username_correct = "admin";
export const password_correct = "admin";

export const pessoaInvalida = {
	isJuridic: false,
	ramo: "tecnologia",
	nomeCompleto: "",
	dataDeNascimento: "2018-10-19",
	sexo: "Mulher",
	estadoCivil: "Divorciado(a)",
	nacionalidade: "Abbot Ross",
	naturalidade: "Josiah Lynn",
	situação: "Regular",
	cpfcnpj: "12345657899",
	nomeFantasia: "test ",
	inscricaoEstadual: "mock",
};
export const pessoaValida = {
	isJuridic: false,
	ramo: "tecnologia",
	nomeCompleto: "lucas",
	dataDeNascimento: "2018-10-19",
	sexo: "Mulher",
	estadoCivil: "Divorciado(a)",
	nacionalidade: "Abbot Ross",
	naturalidade: "Josiah Lynn",
	situação: "Regular",
	cpfcnpj: "12345657899",
	nomeFantasia: "test ",
	inscricaoEstadual: "mock",
};
export const enderecoInvalido = [
	{
		endereco: "",
	},
	{
		endereco: "Jocelyn Simon",
	},
	{
		endereco: "Robin Alvarado",
	},
	{
		endereco: "Ulysses Mendoza",
	},
	{
		endereco: "Sierra Richmond",
	},
	{
		endereco: "Medge Matthews",
	},
	{
		endereco: "Wilma Castaneda",
	},
];

export const contaBancariaInvalida = {
	pessoa: {
		isJuridic: true,
		ramo: "tecnologia",
		nomeCompleto: "Mcdddfsdfgsfdfggdfgddgfgdfgbride",
		dataDeNascimento: "2018-10-19",
		sexo: "Mulher",
		estadoCivil: "Divorciado(a)",
		nacionalidade: "Abbot Ross",
		naturalidade: "Josiah Lynn",
		situação: "Regular",
		cpfcnpj: "573",
		nomeFantasia: "fghgf ",
		inscricaoEstadual: "hjhjf",
	},
	endereco: [
		{
			endereco: "Irma Richmond",
		},
		{
			endereco: "Jocelyn Simon",
		},
		{
			endereco: "Robin Alvarado",
		},
		{
			endereco: "Ulysses Mendoza",
		},
		{
			endereco: "Sierra Richmond",
		},
		{
			endereco: "Medge Matthews",
		},
		{
			endereco: "Wilma Castaneda",
		},
	],
	telefone: [
		{
			numero: "Neville Bernard",
		},
		{
			numero: "Daquan Murray",
		},
		{
			numero: "Moana Mccormick",
		},
		{
			numero: "Jorden Ware",
		},
		{
			numero: "Jasmine Kramer",
		},
		{
			numero: "Fletcher Sheppard",
		},
	],
	contas_bancarias: [
		{
			nomeBanco: "Outro",
			numeroConta: "Palmer Campbell",
			agencia: "Prescott Kelley",
			isPix: false,
			pix: {},
		},
		{
			nomeBanco: "C6 Bank",
			numeroConta: "Dean Cook",
			agencia: "TaShya Browning",
		},
		{
			nomeBanco: "Outro",
			numeroConta: "Seth Pollard",
			agencia: "Eden Stephens",
			isPix: true,
			pix: {
				tipo: "CPF",
			},
		},
		{
			nomeBanco: "C6 Bank",
			numeroConta: "Giacomo Mcfarland",
			agencia: "Eric Solomon",
			isPix: true,
			pix: {
				tipo: "cpf",
			},
		},
		{
			nomeBanco: "Bradesco",
			numeroConta: "Leroy Lindsay",
			agencia: "Pascale Shaw",
			isPix: true,
			pix: {
				tipo: "e-mail",
			},
		},
		{
			nomeBanco: "Bradesco",
			numeroConta: "Velma Grimes",
			agencia: "Evan Mullins",
			isPix: true,
			pix: {
				tipo: "chave aleatoria",
			},
		},
	],
	relacionamento: [
		{
			value: "1",
			tipo: "Dante Mcfarland",
		},
		{
			value: "2",
			tipo: "Dante Mcfarland",
		},
	],
	usuario: {
		username: "lulkxydfot",
		email: "funem@mlklaffilinator.com",
		password: "Pa$$kllw0rd!",
		role: "admin",
	},
};
export const bodyValid = {
	pessoa: {
		isJuridic: true,
		ramo: "tecnologia",
		nomeCompleto: "Mcdddfsdfgsfdfggdfgddgfgdfgbride",
		dataDeNascimento: "2018-10-19",
		sexo: "Mulher",
		estadoCivil: "Divorciado(a)",
		nacionalidade: "Abbot Ross",
		naturalidade: "Josiah Lynn",
		situação: "Regular",
		cpfcnpj: "573",
		nomeFantasia: "fghgf ",
		inscricaoEstadual: "hjhjf",
	},
	endereco: [
		{
			endereco: "Irma Richmond",
		},
		{
			endereco: "Jocelyn Simon",
		},
		{
			endereco: "Robin Alvarado",
		},
		{
			endereco: "Ulysses Mendoza",
		},
		{
			endereco: "Sierra Richmond",
		},
		{
			endereco: "Medge Matthews",
		},
		{
			endereco: "Wilma Castaneda",
		},
	],
	telefone: [
		{
			numero: "Neville Bernard",
		},
		{
			numero: "Daquan Murray",
		},
		{
			numero: "Moana Mccormick",
		},
		{
			numero: "Jorden Ware",
		},
		{
			numero: "Jasmine Kramer",
		},
		{
			numero: "Fletcher Sheppard",
		},
	],
	contas_bancarias: [
		{
			nomeBanco: "Outro",
			numeroConta: "Palmer Campbell",
			agencia: "Prescott Kelley",
			isPix: false,
			pix: {},
		},
		{
			nomeBanco: "C6 Bank",
			numeroConta: "Dean Cook",
			agencia: "TaShya Browning",
			isPix: true,
			pix: {
				tipo: "cpf",
			},
		},
		{
			nomeBanco: "Outro",
			numeroConta: "Seth Pollard",
			agencia: "Eden Stephens",
			isPix: true,
			pix: {
				tipo: "CPF",
			},
		},
		{
			nomeBanco: "C6 Bank",
			numeroConta: "Giacomo Mcfarland",
			agencia: "Eric Solomon",
			isPix: true,
			pix: {
				tipo: "cpf",
			},
		},
		{
			nomeBanco: "Bradesco",
			numeroConta: "Leroy Lindsay",
			agencia: "Pascale Shaw",
			isPix: true,
			pix: {
				tipo: "e-mail",
			},
		},
		{
			nomeBanco: "Bradesco",
			numeroConta: "Velma Grimes",
			agencia: "Evan Mullins",
			isPix: true,
			pix: {
				tipo: "telefone",
			},
		},
	],
	relacionamento: [
		{
			value: "1",
			tipo: "Dante Mcfarland",
		},
	],
	docs: { name: "2654-7180-1-PB.pdf", numeros: "5555555555555555555555555" },
	usuario: {
		username: "lulkxydfot",
		email: "funem@mlklaffilinator.com",
		password: "Pa$$kllw0rd!",
		role: "admin",
	},
};

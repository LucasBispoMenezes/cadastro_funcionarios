import joi from "joi";

export const schemaPessoa = joi
	.object({
		isJuridic: joi.boolean().required().valid(true, false),
		ramo: joi.alternatives().conditional("isJuridic", {
			is: true,
			then: joi.string().required(),
			otherwise: joi.string().allow(""),
		}),
		nomeCompleto: joi.string().required(),
		dataDeNascimento: joi.date().required(),
		sexo: joi.string().required(),
		estadoCivil: joi.string().required(),
		nacionalidade: joi.string().required(),
		naturalidade: joi.string().required(),
		situação: joi.string().required(),
		cpfcnpj: joi.string().required(),
		nomeFantasia: joi.alternatives().conditional("isJuridic", {
			is: true,
			then: joi.string().required(),
			otherwise: joi.string().allow(""),
		}),
		inscricaoEstadual: joi.alternatives().conditional("isJuridic", {
			is: true,
			then: joi.string().required(),
			otherwise: joi.string().allow(""),
		}),
	})
	.messages({
		"object.required": "O campo {#label} é obrigatório",
		"string.empty": "O campo {#label} não pode ser vazio",
		" string.required": "O campo {#label} é obrigatório",
		"boolean.empty": "O campo {#label} não pode ser vazio",
		"boolean.required": "O campo {#label} é obrigatório",
		"any.required": "O campo {#label} é obrigatório",
		"any.unknown": "O campo {#label} não é permitido",
		" any.invalid": "O campo {#label} contém um valor inválido",
		"any.empty": "O campo {#label} não pode ser vazio",
		"date.empty": "O campo {#label} não pode ser vazio",
		"date.required": "O campo {#label} é obrigatório",
		"alternatives.match": "O campo {#label} não corresponde a nenhum caso",
		"alternatives.required": "O campo {#label} é obrigatório",
		"¨alternatives.conditional": "O campo {#label} é obrigatório",
		"string.min": "O campo {#label} deve ter no mínimo {#limit} caracteres",
		"string.max": "O campo {#label} deve ter no máximo {#limit} caracteres",
	});

export const schemaEndereco = joi
	.object({
		endereco: joi.string().required(),
		principal: joi.boolean(),
	})
	.messages({
		"object.required": "O campo {#label} é obrigatório",
		"string.empty": "O campo {#label} não pode ser vazio",
		" string.required": "O campo {#label} é obrigatório",
		"boolean.empty": "O campo {#label} não pode ser vazio",
		"boolean.required": "O campo {#label} é obrigatório",
		"any.required": "O campo {#label} é obrigatório",
		"any.unknown": "O campo {#label} não é permitido",
		" any.invalid": "O campo {#label} contém um valor inválido",
		"any.empty": "O campo {#label} não pode ser vazio",
		"date.empty": "O campo {#label} não pode ser vazio",
	});
export const schemaTelefone = joi
	.object({
		numero: joi.string().required(),
		principal: joi.boolean(),
	})
	.messages({
		"object.required": "O campo {#label} é obrigatório",
		"string.empty": "O campo {#label} não pode ser vazio",
		" string.required": "O campo {#label} é obrigatório",
		"boolean.empty": "O campo {#label} não pode ser vazio",
		"boolean.required": "O campo {#label} é obrigatório",
		"any.required": "O campo {#label} é obrigatório",
		"any.unknown": "O campo {#label} não é permitido",
		" any.invalid": "O campo {#label} contém um valor inválido",
		"any.empty": "O campo {#label} não pode ser vazio",
	});

export const schemaConta = joi
	.object({
		nomeBanco: joi.string().required(),
		numeroConta: joi.string().required(),
		agencia: joi.string().required(),
		isPix: joi.boolean().valid(true, false).required(),
		pix: joi.alternatives().conditional("isPix", {
			is: true,
			then: joi.object({
				tipo: joi.string().required(),
				chave: joi.string().required(),
			}),
			otherwise: joi.object({}),
		}),
	})
	.messages({
		"object.required": "O campo {#label} é obrigatório",
		"string.empty": "O campo {#label} não pode ser vazio",
		" string.required": "O campo {#label} é obrigatório",
		"boolean.empty": "O campo {#label} não pode ser vazio",
		"boolean.required": "O campo {#label} é obrigatório",
		"any.required": "O campo {#label} é obrigatório",
		"any.unknown": "O campo {#label} não é permitido",
		" any.invalid": "O campo {#label} contém um valor inválido",
		"any.empty": "O campo {#label} não pode ser vazio",
		"alternatives.match": "O campo {#label} não corresponde a nenhum caso",
		"alternatives.required": "O campo {#label} é obrigatório",
		"¨alternatives.conditional": "O campo {#label} é obrigatório",
		"string.min": "O campo {#label} deve ter no mínimo {#limit} caracteres",
		"string.max": "O campo {#label} deve ter no máximo {#limit} caracteres",
		"any.allow": "O campo {#label} deve ser vazio",
	});

export const schemaRelacionamento = joi
	.object({
		value: joi.string().required(),
		tipo: joi.string().required(),
	})
	.messages({
		"object.required": "O campo {#label} é obrigatório",
		"string.empty": "O campo {#label} não pode ser vazio",
		" string.required": "O campo {#label} é obrigatório",
		"any.required": "O campo {#label} é obrigatório",
		"any.unknown": "O campo {#label} não é permitido",
		"any.invalid": "O campo {#label} contém um valor inválido",
	});
export const schemaUsuario = joi
	.object({
		username: joi.string().required(),
		email: joi.string().email().required(),
		password: joi.string().required(),
		role: joi.string().valid("admin", "user").required(),
	})
	.messages({
		"object.required": "O campo {#label} é obrigatório",
		"string.empty": "O campo {#label} não pode ser vazio",
		"string.required": "O campo {#label} é obrigatório",
		" string.email": "O campo {#label} deve ser um email válido",
		"  string.min":
			"O campo {#label} deve ter no mínimo {#limit} caracteres",
		"   string.max":
			"O campo {#label} deve ter no máximo {#limit} caracteres",
		"any.required": "O campo {#label} é obrigatório",
		"any.unknown": "O campo {#label} não é permitido",
		"any.invalid": "O campo {#label} contém um valor inválido",
		"string.email": "O campo {#label} deve ser um email válido",
		"string.min": "O campo {#label} deve ter no mínimo {#limit} caracteres",
		"string.max": "O campo {#label} deve ter no máximo {#limit} caracteres",
		"string.valid": "O campo {#label} deve ser um valor válido",
	});

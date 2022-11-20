import { NextFunction, Request, Response } from "express";
import { ErrorApi } from "../classes/classeError";
import {
	addMainInRequest,
	pixInsertKey,
	removerKeyPix,
} from "../utils/manipulationReq";
import {
	schemaPessoa,
	schemaEndereco,
	schemaTelefone,
	schemaConta,
	schemaUsuario
} from "../validations/schema/created";
import 'express-async-errors'

export const midCreated = (req: Request, res: Response, next: NextFunction) => {
	const { error } = schemaPessoa.validate(req.body.pessoa);
	const { error: errorUser } = schemaUsuario.validate(req.body.usuario);
	if (error) throw new ErrorApi(error.message, 400);
	if (errorUser) throw new ErrorApi(errorUser.message, 400);
	pixInsertKey(req, removerKeyPix);
	addMainInRequest(req, "endereco", schemaEndereco);
	addMainInRequest(req, "telefone", schemaTelefone);
	addMainInRequest(req, "contas_bancarias", schemaConta);
	next();
};

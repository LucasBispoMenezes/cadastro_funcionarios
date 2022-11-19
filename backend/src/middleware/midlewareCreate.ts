import { NextFunction, Request, Response } from "express";
import { addMainInRequest, pixInsertKey, removerKeyPix } from '../utils/manipulationReq'
export const midCreated = (req: Request, res: Response, next: NextFunction) => {
	pixInsertKey(req, removerKeyPix);
	addMainInRequest(req, "endereco");
	addMainInRequest(req, "telefone");
	addMainInRequest(req, "contas_bancarias");
	removerKeyPix(req);
	next();
};

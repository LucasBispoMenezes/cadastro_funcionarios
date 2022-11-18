import { NextFunction, Request, Response } from "express";
// import { ErrorApi } from "../classes/classeError";

const addMainInRequest = (req: Request, position: string): void => {
	req.body[position][0] = {
		...req.body[position][0],
		principal: true,
	};
};
export const midCreated = (req: Request, res: Response, next: NextFunction) => {
	req.query.isJuridic = req.body.pessoa.isJuridic;
	addMainInRequest(req, "endereco");
	addMainInRequest(req, "telefone");
	addMainInRequest(req, "contas_bancarias");
	
	next();
};

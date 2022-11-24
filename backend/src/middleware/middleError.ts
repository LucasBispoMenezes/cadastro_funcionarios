import { NextFunction, Request, Response } from "express";
import { ErrorApi } from "../classes/classeError";

export const midErro = (
	err: ErrorApi,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!err) return next();
	if (!err.statusCode) {
		console.log(err.message, err.stack);
		return res.status(500).json({
			message:
				"Houve um Erro interno, PorFavor entre em contato com o adminstrador",
		});
	}
	return res.status(err.statusCode).json({ message: err.message });
};

import { NextFunction, Request, Response } from "express";
import { ErrorApi } from "../classes/classeError";

export const  midErro = (err: ErrorApi, req: Request, res: Response, next: NextFunction) => {
	if(!err) return next()
	return res.status( err.statusCode || 500).json({ message: err.message });
}

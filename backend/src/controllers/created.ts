import { Request, Response } from "express";
import createPeapleJuridica from "../service/created";
import "express-async-errors";

export const created = async (req: Request, res: Response) => {
	await createPeapleJuridica(req.body);
	return res.status(200).json({ message: "usuario criado com sucesso" });
};

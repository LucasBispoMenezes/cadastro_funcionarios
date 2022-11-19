import { Request, Response } from "express";
import createPeapleJuridica from "../service/created";

export const created = async (req: Request, res: Response) => {
	const r = await createPeapleJuridica(req.body);
	res.json(r);
	console.log(req.body);
	res.end();
};

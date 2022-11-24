import { Request, Response } from "express";
import service from "../service/Usuario";
import { loginSchema } from "../validations/schema/login";
import { ErrorApi } from "../classes/classeError";
import { generateToken, verifyToken } from "../auth/index";
import "express-async-errors";

const getUser = async (req: Request, res: Response) => {
	const { error } = loginSchema.validate(req.body);
	if (error) throw new ErrorApi(error.message, 400);
	const user = await service.findUniqueUser(req.body.username, req.body.password);
	const token = generateToken(user);
	return res.status(200).json({ token });
};

export const getAllUser = async (req: Request, res: Response) => {
	try {
		const { authorization } = req.headers;
		await verifyToken(authorization as string);
		const user = await service.getAll();
		return res.status(200).json({ user });
	} catch (error) {
		throw new ErrorApi("Token inválido", 401);
	}
};

export default {
	getUser,
	getAllUser,
};

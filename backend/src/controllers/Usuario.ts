import { Request, Response } from "express";
import findUniqueUser from "../service/Usuario";
import "express-async-errors";
import { loginSchema } from "../validations/schema/login";
import { ErrorApi } from "../classes/classeError";
import { generateToken } from "../auth/index";

const getUser = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const { error } = loginSchema.validate(req.body);

	if (error) throw new ErrorApi(error.message, 400);

	const user = await findUniqueUser(username, password);
	const token = generateToken(user);

	return res.status(200).json({ token });
};

export default getUser;

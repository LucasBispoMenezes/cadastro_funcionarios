import { Request, Response } from "express"
import findUniqueUser from '../service/Usuario';
import 'express-async-errors'

const getUser = async (req: Request, res: Response) => {
	console.log(req.body);
	const { username, password } = req.body;
	const user = await findUniqueUser(username, password);
	return res.status(200).json(user); 
}

export default getUser

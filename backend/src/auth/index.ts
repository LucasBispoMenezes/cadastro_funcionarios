import jwt from "jsonwebtoken";
import "dotenv/config";

interface IToken {
	id: number;
	username: string;
	role: "admin" | "user";
}

export const generateToken = (user: IToken): string => {
	const token = jwt.sign({ user }, process.env.SECRET as string, {
		expiresIn: "1d",
		algorithm: "HS256",
	});
	return token;
};

export const verifyToken = (token: string): IToken => {
	const { user } = jwt.verify(token, process.env.SECRET as string) as {user: IToken;};
	return user;
};

import app from "./app";
import 'dotenv/config'
import { Request, Response } from "express";
import {  } from './database/prismaConnection';

const PORT = process.env.PORT || 3000;

app.get("/",async (_req: Request, res: Response) => {
	res.status(200).send("Hello World!");
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

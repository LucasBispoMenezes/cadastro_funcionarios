/* eslint-disable @typescript-eslint/no-explicit-any */
import { contas_bancarias } from "../interfaces";
import { Request } from "express";
import Joi from "joi";
import { ErrorApi } from "../classes/classeError";
import 'express-async-errors'

export const addMainInRequest = (
	req: Request,
	position: string,
	schema: Joi.Schema
): void => {
	try {
		req.body[position].forEach((element: unknown) => {
			const { error } = schema.validate(element);
			if (error) throw new ErrorApi(error.message, 400);
		});
		req.body[position][0] = {
			...req.body[position][0],
			principal: true,
		};
	} catch (error:any) {
		throw new ErrorApi(error?.message, 400);
	}
};
export const removerKeyPix = (req: Request): void => {
	if (req.body.contas_bancarias)
		req.body.contas_bancarias.forEach((e: Record<string, string>) => {
			!e.isPix && delete e.pix;
		});
};

export const pixInsertKey = (req: Request, removeFieldPix: (req: Request) => void) => {
	removeFieldPix(req);
	const { contas_bancarias } = req.body;
	if (req.body.contas_bancarias)
		contas_bancarias.forEach((e: contas_bancarias, index: number) => {
			switch (e.pix?.tipo.toUpperCase()) {
				case "CPF".toUpperCase():
					e.pix.chave = req.body.pessoa.cpfcnpj;
					break;
				case "E-mail".toUpperCase():
					e.pix.chave = req.body.usuario.email ;
					break;
				case "Telefone".toUpperCase():
					e.pix.chave = req.body.telefone[0].numero;
					break;
				case "chave aleatoria".toUpperCase():
					e.pix.chave =
						Math.random().toString(36).substring(2, 15) +
						Math.random().toString(36).substring(2, 15);
					break;
				default:
					console.log("erro", index);
					break;
			}
		});
};

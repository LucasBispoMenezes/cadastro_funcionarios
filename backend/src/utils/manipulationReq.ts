import { contas_bancarias } from "../interfaces";
import { Request } from "express";

export const addMainInRequest = (req: Request, position: string): void => {
	req.body[position][0] = {
		...req.body[position][0],
		principal: true,
	};
};
export const removerKeyPix = (req: Request): void => {
	req.body.contas_bancarias.forEach((e: Record<string, string>) => {
		!e.isPix && delete e.pix;
	});
};

export const pixInsertKey = (req: Request, removeFieldPix: any) => {
	removeFieldPix(req);
	const { contas_bancarias } = req.body;
	contas_bancarias.forEach((e: contas_bancarias, index: number) => {
		switch (e.pix?.tipo.toUpperCase()) {
			case "CPF".toUpperCase():
				e.pix.chave = req.body.pessoa.cpfcnpj;
				break;
			case "E-mail".toUpperCase():
				e.pix.chave = req.body.usuario.email;

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

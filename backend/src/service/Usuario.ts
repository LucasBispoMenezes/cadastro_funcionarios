import prisma from "../database/prismaConnection"
import 'express-async-errors'
import { ErrorApi } from "../classes/classeError"
import 'express-async-errors'

const findUniqueUser = async (username: string, password: string) => {
	const  user = await prisma.usuario.findFirst({
		where:{
			username,
			senha: password
		},
	select:{
		id: true,
		username:true,
		role:true,
	}})
	if(!user || user === null) throw new ErrorApi("Usuário ou Senha Incorreta", 404)
	if(user.role !== 'admin' ) throw new ErrorApi("local não autorizado", 403)
	return user
}

export const  getAll = async () => {
	return await prisma.pessoa.findMany({
		select:{
			id: true,
			nomeCompleto: true,
		}
	})
}

export default findUniqueUser

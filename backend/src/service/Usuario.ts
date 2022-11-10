import prisma from "../database/prismaConnection"
import 'express-async-errors'
import { ErrorApi } from "../classes/classeError"

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
	
	if(!user) throw new ErrorApi("Usuário não encontrado", 404)
	if(!user.id) throw new ErrorApi("local não autorizado", 403)
	return user
}


export default findUniqueUser

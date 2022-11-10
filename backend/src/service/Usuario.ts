import prisma from "../database/prismaConnection"
import 'express-async-errors'

const findUniqueUser = async (username: string, password: string) => {
	const  user = await prisma.usuario.findFirst({
		where:{
			username,
			senha: password
		}
	})
	if(!user) throw new Error("Usuário não encontrado")
	return user
}


export default findUniqueUser

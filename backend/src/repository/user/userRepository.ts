import prismaClient from "../../prisma";
import { User } from "@prisma/client";

class UserRepository {
  async createUser(data: Omit<User, 'id'>): Promise<User> {
    return prismaClient.user.create({ data });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({  where:{ email}});
  }
//   async findUserByUserName(userName: string): Promise<User | null> {
//     return prismaClient.user.findUnique({  where:{
//       nome_User: userName
//   },
//   include:{
//       Pessoa:true
//   } });
//   }

  async findUserById(id: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: { id },
    });
  }
  
//   async updateUser(userId: string, data: Partial<User>): Promise<User> {
//     return prismaClient.user.update({
//       where: { id_User: userId },
//       data,
//     })};

  async deleteUser(email:string): Promise<User>{
    return prismaClient.user.delete({
      where: { email: email }
    })
  }
}

export { UserRepository };

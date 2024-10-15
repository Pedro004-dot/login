import prismaClient from "../../prisma";
import { UserRepository } from "../../repository/user/userRepository";
import { hash } from "bcrypt";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ name, email, password }: UserRequest) {

    if (!email) {
        throw new Error("Email ou senha incorreto");
      }
      
    const emailAlreadyExists = await this.userRepository.findUserByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("Email já cadastrado");
    }
    const passwordHash = await hash(password, 8);
    try {
      const user = await prismaClient.$transaction(async (prisma) => {
        const createdUser = await prisma.user.create({
          data: { 
            name,
            email,
            password: passwordHash,
          },
        });

        return createdUser;
      });

      return user;
    } catch (error) {
        console.log("Nao foi possivel criar o usuario")
      throw new Error("Não foi possível criar o usuário");
    }
  }
}

export { CreateUserService };

import { UserRepository } from "../../repository/user/userRepository";

class DeleteUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
   
  }

  async execute(email: string): Promise<void> {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    console.log("Usuario:"+ email)
    // Deletar a entrada na tabela Usuario
    await this.userRepository.deleteUser(email);
  }
}

export { DeleteUserService };

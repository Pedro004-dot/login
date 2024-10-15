
import { UserRepository } from "../../repository/user/userRepository";

class GetUserService {
    private userRepository: UserRepository;
  
    constructor() {
      this.userRepository = new UserRepository();
    }
  
    async execute(email: string) {
  
      try {
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
          throw new Error("Usuário não encontrado");
        }
        return { user };
      } catch (error) {
        throw new Error("Erro ao encontrar usuario");
      }
    }
  }
export {GetUserService}  
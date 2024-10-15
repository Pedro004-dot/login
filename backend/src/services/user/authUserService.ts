import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../../repository/user/userRepository";

interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ email, password }: AuthUserRequest) {
    const usuario = await this.userRepository.findUserByEmail(email);

    if (!usuario) {
      throw new Error("Email ou senha incorretos");
    }

    const passwordMatch = await compare(password, usuario?.password);

    if (!passwordMatch) {
      throw new Error("Email ou senha incorretos");
    }

    // Verifique se JWT_SECRET está definido
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT secret não foi definido.");
    }

    const token = sign(
      {
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        subject: usuario.id,
        expiresIn: "1d",
      }
    );

    return {
      id: usuario?.id,
      email: usuario?.email,
      token: token,
    };
  }
}

export { AuthUserService };

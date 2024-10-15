import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/authUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService();

    try {
      const authData = await authUserService.execute({ email, password });
      return res.status(200).json(authData);
    } catch (error) {
      console.error("Erro durante a autenticação:", error);

      // Verifique se o erro é uma instância de Error e, caso contrário, use uma mensagem genérica
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Ocorreu um erro desconhecido" });
      }
    }
  }
}

export { AuthUserController };

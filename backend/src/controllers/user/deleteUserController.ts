import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/deleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const deleteUserService = new DeleteUserService();

    try {
      await deleteUserService.execute(email);
      return res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      console.log(error)
        return res.status(400).json({ message: "Ocorreu um erro desconhecido" });
    }
  }
}

export { DeleteUserController };

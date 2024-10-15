import {Request, Response} from 'express'
import { GetUserService } from '../../services/user/getUserService';


class GetUserController {
    async handle(req: Request, res: Response) {
      const { email } = req.body;
      
      const userDetailService = new GetUserService();

      try {
        const user = await userDetailService.execute(email);
        return res.json(user)
      } catch (error) {
        return res.status(404).json({ message: "Ocorreu um erro ao encontrar o usuario" });
      }
    }
}
export { GetUserController }



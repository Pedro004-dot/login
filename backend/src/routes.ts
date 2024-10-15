import { Router} from 'express';
import { CreateUserController } from './controllers/user/createUserController';
import { AuthUserController } from './controllers/user/authUserController';
import { DeleteUserController } from './controllers/user/deleteUserController';
import { GetUserController } from './controllers/user/getUserController';


const router = Router()

router.post('/user',new CreateUserController().handle)
router.post('/login',new AuthUserController().handle)
router.post('/deleteUser',new DeleteUserController().handle)
router.get('/getUser',new GetUserController().handle)

export {router}
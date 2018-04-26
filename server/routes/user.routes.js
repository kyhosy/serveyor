import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Post Login
router.route('/user/login').post(UserController.login);


// register
router.route('/user/register').post(UserController.register);

// forgotPassword
router.route('/user/forgotPassword').post(UserController.forgotPassword);


export default router;

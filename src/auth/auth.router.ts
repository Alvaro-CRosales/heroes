import {Router as router} from 'express';
import {JWT} from '../helpers/jwt';
import {AuthCtrl} from './auth.ctrl';

export const authRouter = router();

authRouter
    .post('/login', AuthCtrl.logIn)
    .use('/', JWT.isAdmin)
    .post('/', AuthCtrl.createUser);



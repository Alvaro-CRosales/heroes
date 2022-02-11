import {Router as router} from 'express';
import {AuthCtrl} from './authctrl';

export const authRouter = router();

authRouter
    .post('/', AuthCtrl.createUser);


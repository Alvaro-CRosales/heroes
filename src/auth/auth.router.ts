import {Router as router} from 'express';
import {JWT} from '../helpers/jwt';
import {AuthCtrl} from './auth.ctrl';

export const authRouter = router();

authRouter
    .post('/login', AuthCtrl.logIn)
    .patch('/user/:id', JWT.isEditable, AuthCtrl.updateUser)
    .use('/', JWT.isAdmin)
    .post('/', AuthCtrl.createUser)
    .get('/all', AuthCtrl.getAll)
    .get('/user/:id', AuthCtrl.getUnique)
    .delete('/user', AuthCtrl.deleteUser);



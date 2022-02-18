import handler, {IResponseModel} from '../helpers/handler';
import {Request, Response} from 'express';
import {AuthService} from './auth.service';
import {IUserModel} from './auth.model';

export class AuthCtrl {
  public static async createUser(req:Request, res:Response): Promise<void> {
    try {
      const user: IUserModel = req.body;
      const creatorId = res.locals.user.id;
      console.log(creatorId);
      const serviceResponse:IResponseModel = await AuthService.createUser(user,
          creatorId);
      handler(res, serviceResponse);
    } catch (error:any) {
      console.log(error);
      error.code === 'P2002' ? error = 'El correo ya existe' : console.log('1');
      handler(res, {code: 400, message: error});
    }
  }

  public static async logIn(req:Request, res:Response): Promise<void> {
    try {
      const user: IUserModel = req.body;
      const password: IUserModel = req.body;
      const serviceResponse:IResponseModel = await AuthService.logIn(user,
          password);
      handler(res, serviceResponse);
    } catch (error:any) {
      console.log(error);
      handler(res, {code: 400, message: error});
    }
  }
}

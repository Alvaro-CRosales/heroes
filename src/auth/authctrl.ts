import handler, {IResponseModel} from '../helpers/handler';
import {Request, Response} from 'express';
import {AuthService} from './authservice';
import {IUserModel} from './authmodel';

export class AuthCtrl {
  public static async createUser(req:Request, res:Response): Promise<void> {
    try {
      const user: IUserModel = req.body;
      const userToken = req.headers['authorization'];
      const serviceResponse:IResponseModel = await AuthService.createUser(user,
          userToken!);
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

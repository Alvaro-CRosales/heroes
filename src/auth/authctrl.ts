import handler, {IResponseModel} from '../helpers/handler';
import {Request, Response} from 'express';
import {AuthService} from './authservice';
import {IUserModel} from './authmodel';

export class AuthCtrl {
  public static async createUser(req:Request, res:Response): Promise<void> {
    try {
      const user: IUserModel = req.body;
      const serviceResponse:IResponseModel = await AuthService.createUser(user);
      handler(res, serviceResponse);
    } catch (error:any) {
      error.code === 'P2002' ? error = 'El correo ya existe' :
      console.log('1');
      handler(res, {code: 400, message: error});
    }
  }
}

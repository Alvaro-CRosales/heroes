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

  public static async getAll(req:Request, res:Response): Promise<void> {
    try {
      const name = String(req.query.name);
      const email = String(req.query.email);
      const serviceResponse:IResponseModel =
      await AuthService.getAll(name, email);
      handler(res, serviceResponse);
    } catch (error:any) {
      handler(res, {code: 400, message: error});
    }
  }

  public static async getUnique(req:Request, res:Response): Promise<void> {
    try {
      const id: number = Number(req.params.id);
      const serviceResponse:IResponseModel = await AuthService.getUnique(id);
      handler(res, serviceResponse);
    } catch (error:any) {
      handler(res, {code: 400, message: error});
    }
  }

  public static async updateUser(req:Request, res:Response): Promise<void> {
    try {
      const id: number = Number(req.params.id);
      const name: string = req.body.name;
      const serviceResponse:IResponseModel =
      await AuthService.updateUser(id, name);
      handler(res, serviceResponse);
    } catch (error:any) {
      handler(res, {code: 400, message: error});
    }
  }

  public static async deleteUser(req:Request, res:Response): Promise<void> {
    try {
      const id: number = req.body.id;
      const serviceResponse:IResponseModel = await AuthService.deleteUser(id);
      handler(res, serviceResponse);
    } catch (error:any) {
      handler(res, {code: 400, message: error});
    }
  }
}

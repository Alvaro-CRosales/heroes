import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import {ITokenModel} from '../auth/auth.model';
import env from '../config/env';
import handler from './handler';

export interface ITokenizeModel {
    jwt: string
}

export class JWT {
  public static async tokenize(tokenModel:ITokenModel):Promise<ITokenizeModel> {
    const token = jwt.sign(tokenModel, String(env.JWT_SECRET));
    return {jwt: token};
  }

  public static async isAdmin(req: Request, res: Response, next:NextFunction)
  :Promise<void> {
    const token: any = jwt.verify(req.headers.authorization?
      req.headers.authorization.replace('Bearer ', ''): '',
    env.JWT_SECRET);
    if (token.role === 'ADMIN') {
      res.locals.user = token;
      next();
    } else {
      handler(res, {code: 403, message: 'Service forbbiden'});
    }
  }
}

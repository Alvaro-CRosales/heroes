import jwt from 'jsonwebtoken';
import {ITokenModel} from '../auth/authmodel';
import env from '../config/env';

export interface ITokenizeModel {
    jwt: string
}

export class JWT {
  public static async tokenize(tokenModel:ITokenModel):Promise<ITokenizeModel> {
    const token = jwt.sign(tokenModel, String(env.JWT_SECRET));
    return {jwt: token};
  }

  public static async decoded(tokenModel:string):Promise<ITokenModel> {
    const token:any = jwt.verify(tokenModel.replace('Bearer ', ''),
        env.JWT_SECRET);
    return {id: token.id, role: token.role};
  }
}

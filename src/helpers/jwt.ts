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
}

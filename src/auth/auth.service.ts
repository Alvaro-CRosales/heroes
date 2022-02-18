import {compare} from 'bcrypt';
import {IResponseModel} from '../helpers/handler';
import {JWT} from '../helpers/jwt';
import {AuthModel, IUserModel} from './auth.model';


export class AuthService {
  public static async createUser(user:IUserModel, creatorId:number):
  Promise<IResponseModel> {
    const result = await AuthModel.createUser(user, creatorId);
    return {code: 201, message: result};
  }

  public static async logIn(user:IUserModel, password:IUserModel)
  :Promise<IResponseModel> {
    const result = await AuthModel.logIn(user);
    if (await compare(password.password, result.password)) {
      const token = await JWT.tokenize({id: result.id, role: result.role});
      return {code: 201, message: token};
    } else {
      return {code: 401, message: 'Wrong credentials'};
    }
  }
}
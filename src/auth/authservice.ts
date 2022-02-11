import {IResponseModel} from '../helpers/handler';
import {AuthModel, IUserModel} from './authmodel';

export class AuthService {
  public static async createUser(user:IUserModel): Promise<IResponseModel> {
    const result = await AuthModel.createUser(user);
    console.log(result);
    return {code: 201, message: result};
  }
}

import {PrismaClient} from '@prisma/client';
import {JWT} from '../helpers/jwt';
import bcrypt from 'bcrypt';
import {ITokenizeModel} from '../helpers/jwt';

const prisma = new PrismaClient();

export interface IUserModel{
    name: string,
    email: string,
    password: string,
}

export interface ITokenModel{
    id: number
}

export class AuthModel {
  public static async createUser(user: IUserModel): Promise<ITokenizeModel> {
    const resultUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: await bcrypt.hash(user.password, 10),
      },
    });
    return await JWT.tokenize({id: resultUser.id});
  }
}

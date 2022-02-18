import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export interface IUserModel{
    name: string,
    email: string,
    password: string,
}

export interface ITokenModel{
    id: number,
    role: string,
}

export interface IUserCredentials{
    id: number,
    password: string,
    role: string,
}

export interface INewUser{
    name: string,
    email: string,
    message: string,
}

export class AuthModel {
  public static async createUser(user: IUserModel, creatorId: number):
  Promise<INewUser> {
    const resultUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: await bcrypt.hash(user.password, 10),
        creatorId: creatorId,
      },
    });
    return {name: resultUser.name?resultUser.name:'',
      email: resultUser.email, message:
      'Se creó un nuevo usuario'};
  }

  public static async logIn(user: IUserModel): Promise<IUserCredentials> {
    const resultUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    return {id: resultUser!.id, password: resultUser!.password, role:
      resultUser!.role};
  }
}

import * as dotenv from 'dotenv';

dotenv.config();

export default class ENV {
  public static PORT: number = Number(process.env.PORT as string);
  public static JWT_SECRET: string = (process.env.JWT_SECRET as string);
}


import {Response} from 'express';

export interface IResponseModel {
    code: number,
    message: string | object | null
}

class RequestHandler {
  public static Handler(res: Response, incomming: IResponseModel) {
    res.status(incomming.code).json(RequestHandler.evolve(incomming.message));
  }

  private static evolve(inData: any) {
    switch (typeof inData) {
      case 'string':
        if (inData === 'emptyArray') {
          inData = {
            data: [],
          };
        } else {
          inData = {
            data: inData,
          };
        } break;
      case 'object':
        if (inData[0]) {
          inData = {
            data: [...inData],
          };
        } else {
          inData = {
            data: {...inData},
          };
        } break;
    }
    return inData;
  }
}
export default RequestHandler.Handler;

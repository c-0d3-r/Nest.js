import { NextFunction, Request, Response } from 'express';
import { HttpError }                       from './http.error';

export interface IExceptonFilter {
  catch(err: HttpError, req: Request, res: Response, next: NextFunction): void;
}

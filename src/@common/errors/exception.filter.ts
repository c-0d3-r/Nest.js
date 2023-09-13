import { NextFunction, Request, Response } from 'express';
import { LoggerService }                   from '../../logger/logger';
import { HttpError }                       from './http.error';

export interface ExceptonFilter {
  catch(err: HttpError, req: Request, res: Response, next: NextFunction): void;
}

export class ExceptionFilter {
  public constructor(protected readonly logger: LoggerService) {}

  public catch(
    err: HttpError | Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    let status: number;

    if (err instanceof HttpError) {
      status = err.statusCode;
      this.logger.error(
        `status: ${status}, msg: ${err.message}, ctx: ${err.context}`
      );
    } else {
      status = 500;
      this.logger.error(`status:${status}, msg: ${err.message}`);
    }

    res.status(status).send({ err: err.message });
  }
}

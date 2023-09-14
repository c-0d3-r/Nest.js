import { NextFunction, Request, Response } from 'express';
import { HttpError }                       from './http.error';
import { ILogger }                         from '../../logger/logger.interface';
import { IExceptonFilter }                 from './exception-filter.interface';
import { inject, injectable }              from 'inversify';
import { TYPES }                           from '../../types';

@injectable()
export class ExceptionFilter implements IExceptonFilter {
  public constructor(
    @inject(TYPES.ILogger) protected readonly logger: ILogger
  ) {}

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

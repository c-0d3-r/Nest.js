import { NextFunction, Request, Response } from 'express';
import { BaseController }                  from '../@common/controller/base.controller';
import { HttpError }                       from '../@common/errors/http.error';
import { ILogger }                         from '../logger/logger.interface';
import { inject, injectable }              from 'inversify';
import { TYPES }                           from '../types';
import { IUsersController }                from './users-controller.interface';

@injectable()
export class UsersController
  extends BaseController
  implements IUsersController
{
  public constructor(@inject(TYPES.ILogger) logger: ILogger) {
    super(logger);

    this.bindRoutes([
      {
        path: '/login',
        method: 'post',
        func: this.login,
      },
      {
        path: '/register',
        method: 'post',
        func: this.register,
      },
    ]);
  }

  public login(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, 'login');
    next(new HttpError(401, 'Unauthorized'));
  }

  public register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}

import { NextFunction, Request, Response } from 'express';
import { BaseController }                  from '../@common/controller/base.controller';
import { LoggerService }                   from '../logger/logger';

export class UsersController extends BaseController {
  public constructor(logger: LoggerService) {
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
    this.ok(res, 'login');
  }

  public register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}

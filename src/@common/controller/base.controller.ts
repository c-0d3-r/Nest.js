import { Response, Router } from 'express';
import { Route }            from './route.interface';
import { ILogger }          from '../../logger/logger.interface';

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export abstract class BaseController {
  private readonly _router: Router;

  public constructor(private readonly logger: ILogger) {
    this._router = Router();
  }

  public get router(): Router {
    return this._router;
  }

  public send<T>(res: Response, status: number, data: T) {
    return res.status(status).type('application/json').send(data);
  }

  public ok<T>(res: Response, data: T) {
    return this.send(res, HttpStatus.OK, data);
  }

  public created<T>(res: Response, data: T) {
    return this.send(res, HttpStatus.CREATED, data);
  }

  protected bindRoutes(routes: Route[]) {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`);
      this.router[route.method](route.path, route.func.bind(this));
    }
  }
}

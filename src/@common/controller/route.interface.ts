import { NextFunction, Request, Response, Router } from 'express';

export type HttpMethod = keyof Pick<
  Router,
  'put' | 'get' | 'post' | 'delete' | 'patch'
>;

export interface Route {
  path: string;
  func(req: Request, res: Response, next: NextFunction): void;
  method: HttpMethod;
}

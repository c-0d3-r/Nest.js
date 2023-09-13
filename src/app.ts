import express, { Express } from 'express';
import { Server }           from 'http';
import { LoggerService }    from './logger/logger';
import { UsersController }  from './users/users.controller';
import { ExceptionFilter }  from './@common/errors/exception.filter';

const defaultPort = 8000;

export class App {
  private app: Express;

  private port: number;

  private server: Server | undefined;

  public constructor(
    private readonly logger: LoggerService,
    private readonly usersController: UsersController,
    private readonly exceptionFilter: ExceptionFilter
  ) {
    this.app = express();
    this.port = defaultPort;
  }

  private useRoutes() {
    this.app.use('/users', this.usersController.router);
  }

  private useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.useExceptionFilters();
    this.server = this.app.listen(this.port);

    this.logger.log('Application is running on port %s', this.port);
  }
}

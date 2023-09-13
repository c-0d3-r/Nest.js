import { ExceptionFilter } from './@common/errors/exception.filter';
import { App }             from './app';
import { LoggerService }   from './logger/logger';
import { UsersController } from './users/users.controller';

async function bootsrap() {
  const loggerService = new LoggerService();
  const exceptionFilter = new ExceptionFilter(loggerService);
  const usersController = new UsersController(loggerService);

  const app = new App(loggerService, usersController, exceptionFilter);

  await app.init();
}

bootsrap();

import { App }             from './app';
import { LoggerService }   from './logger/logger';
import { UsersController } from './users/users.controller';

async function bootsrap() {
  const loggerService = new LoggerService();
  const app = new App(loggerService, new UsersController(loggerService));

  await app.init();
}

bootsrap();

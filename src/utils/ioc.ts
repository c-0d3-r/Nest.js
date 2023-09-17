import { Container }       from 'inversify';
import { ILogger }         from '../logger/logger.interface';
import { UsersController } from '../users/users.controller';
import { TYPES }           from '../types';
import { IExceptonFilter } from '../@common/errors/exception-filter.interface';
import { App }             from '../app';
import { ExceptionFilter } from '../@common/errors/exception.filter';
import { LoggerService }   from '../logger/logger';

export const createContainer = () => {
  const appContainer = new Container();

  appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
  appContainer.bind<UsersController>(TYPES.IUserController).to(UsersController);
  appContainer
    .bind<IExceptonFilter>(TYPES.IExceptionFilter)
    .to(ExceptionFilter);
  appContainer.bind<App>(TYPES.Application).to(App);

  return appContainer;
};

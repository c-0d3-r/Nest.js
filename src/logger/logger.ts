import { ILogObj, Logger } from 'tslog';
import { ILogger }         from './logger.interface';
import { injectable }      from 'inversify';

@injectable()
export class LoggerService implements ILogger {
  public logger: Logger<ILogObj>;

  public constructor() {
    this.logger = new Logger({
      type: 'pretty',
      minLevel: 0,
      name: 'app',
    });
  }

  public log(...args: unknown[]): void {
    this.logger.info(...args);
  }

  public error(...args: unknown[]): void {
    this.logger.error(...args);
  }

  public warn(...args: unknown[]): void {
    this.logger.warn(...args);
  }
}

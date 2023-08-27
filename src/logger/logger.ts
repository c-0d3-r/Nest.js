import { Logger, ILogObj } from 'tslog';

export class LoggerService {
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

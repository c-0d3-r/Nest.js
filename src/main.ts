import { App }           from './app';
import { LoggerService } from './logger/logger';

async function bootsrap() {
  const app = new App(new LoggerService());

  await app.init();
}

bootsrap();

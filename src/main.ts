import 'reflect-metadata';
import { createApp } from './utils/create-app';

async function bootsrap() {
  const app = createApp();

  await app.init();
}

bootsrap();

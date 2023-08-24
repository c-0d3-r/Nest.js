import express, { Express } from 'express';
import { Server }           from 'http';

const defaultPort = 8000;

export class App {
  private app: Express;

  private port: number;

  private server: Server | undefined;

  public constructor() {
    this.app = express();
    this.port = defaultPort;
  }

  private useRoutes() {}

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
  }
}

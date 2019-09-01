import express from 'express';
import path from 'path';
import Youch from 'youch';
import * as Sentry from '@sentry/node';

import 'express-async-errors'; // To work with Sentry
import './database';

import routes from './routes';
import sentryConfig from './config/sentry';

class App {
  constructor() {
    this.server = express();

    // Sentry: Sentry should be initialized as early in your app as possible.
    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    // Sentry: The request handler must be the first middleware on the app
    this.server.use(Sentry.Handlers.requestHandler());

    this.server.use(express.json());

    // Acessando arquivos de forma estática no caminho.
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);

    // Sentry: The error handler must be before any other error middleware and after all controllers
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (error, req, res, next) => {
      const errors = await new Youch(error, req).toJSON();

      return res.status(500).json(errors);
    });
  }
}

export default new App().server;

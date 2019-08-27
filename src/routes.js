import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Middleware será definido somente para as rotas após usado.
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;

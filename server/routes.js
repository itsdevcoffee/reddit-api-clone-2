import express from 'express';

// Controller Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';

const routes = express();

// Basic Routes
routes.get('/', basicController.get);


// User Routes
routes.post('/signup', userController.post);

export default routes;

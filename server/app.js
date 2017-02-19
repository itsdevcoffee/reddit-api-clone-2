import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/devcoffee', () => {
  console.log('Connected to mongodb...');
});

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;

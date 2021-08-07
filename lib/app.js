import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import playersController from './controllers/players.js';

const app = express();

app.use(express.json());

app.use(playersController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
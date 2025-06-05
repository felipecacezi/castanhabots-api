import express, { Request, Response } from 'express';
import mainRouter from './routes/main.route';

const app = express();
const port = 3000;

app.use(express.json())
app.use('/api', mainRouter)

export default app;
import express, { Request, Response } from 'express';
import authRouter from './routes/auth.route';
import userRouter from './routes/user.route';

const app = express();
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.get('/api/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});
export default app;
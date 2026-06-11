import express from 'express';
import { connectDatabase } from './config/database';
import apiRouter from './routes';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_req, res) => {
  res.json({ status: 'OctoFit Tracker API', version: '0.0.1' });
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

startServer();

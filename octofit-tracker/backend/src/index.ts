import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ status: 'OctoFit Tracker API', version: '0.0.1' });
});

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log(`MongoDB connected to ${mongoUrl}`);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
  console.log(`Server listening on http://localhost:${port}`);
});

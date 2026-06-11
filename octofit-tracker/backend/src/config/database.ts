import mongoose from 'mongoose';

const dbName = process.env.MONGODB_DB || 'octofit_db';
const mongoUrl = process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;

export async function connectDatabase() {
  await mongoose.connect(mongoUrl);
  console.log(`MongoDB connected to ${mongoUrl}`);
}

export default mongoose;

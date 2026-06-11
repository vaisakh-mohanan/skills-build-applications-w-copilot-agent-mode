import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  performedAt: { type: Date, default: () => new Date() }
});

export const Workout = model('Workout', workoutSchema);

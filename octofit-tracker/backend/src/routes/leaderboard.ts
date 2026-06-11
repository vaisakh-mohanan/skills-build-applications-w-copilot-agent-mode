import { Router } from 'express';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await Workout.aggregate([
    { $group: { _id: '$user', totalCalories: { $sum: '$caloriesBurned' } } },
    { $sort: { totalCalories: -1 } },
    { $limit: 10 }
  ]);
  res.json(leaderboard);
});

export default router;

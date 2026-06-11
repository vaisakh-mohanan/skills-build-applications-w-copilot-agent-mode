import { Router } from 'express';
import usersRouter from './users';
import teamsRouter from './teams';
import activitiesRouter from './activities';
import workoutsRouter from './workouts';
import leaderboardRouter from './leaderboard';

const router = Router();

router.use('/users', usersRouter);
router.use('/teams', teamsRouter);
router.use('/activities', activitiesRouter);
router.use('/workouts', workoutsRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;

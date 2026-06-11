import { connectDatabase } from '../config/database';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Workout } from '../models/Workout';
import { Activity } from '../models/Activity';

async function seed() {
  await connectDatabase();

  await Promise.all([User.deleteMany(), Team.deleteMany(), Workout.deleteMany(), Activity.deleteMany()]);

  const users = await User.create([
    { name: 'Avery Octo', email: 'avery@octofit.com' },
    { name: 'Morgan Tide', email: 'morgan@octofit.com' }
  ]);

  const team = await Team.create({ name: 'Deep Sea Runners', members: users.map((user) => user._id) });

  await Workout.create([
    { user: users[0]._id, type: 'Cycling', durationMinutes: 45, caloriesBurned: 520 },
    { user: users[1]._id, type: 'Running', durationMinutes: 30, caloriesBurned: 420 }
  ]);

  await Activity.create([
    { user: users[0]._id, type: 'Yoga', durationMinutes: 60 },
    { user: users[1]._id, type: 'Swimming', durationMinutes: 40 }
  ]);

  console.log('Seeded OctoFit Tracker with users, teams, workouts, and activities.');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});

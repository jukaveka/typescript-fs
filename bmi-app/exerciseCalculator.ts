import { isNotNumber } from "./utils/isNotNumber";

interface ExerciseReport {
  trainingPeriod: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface ExerciseData {
  target: number;
  exercises: number[];
}

const parseParams = (args: string[]): ExerciseData => {
  if (args.length < 4) throw new Error(`Too few arguments`);

  args.forEach((arg, index) => {
    if (index >= 2 && isNotNumber(arg)) {
      throw new Error(
        `Target hours and daily exercise hours are to given as numbers`,
      );
    }
  });

  let target: number;
  let exercises: number[];

  target = Number(args[2]);
  exercises = args
    .map((arg, index) => {
      if (index > 2) {
        return Number(arg);
      }
    })
    .filter((hours) => hours !== undefined);

  return { target, exercises };
};

const calculateExercises = (
  target: number,
  exercises: number[],
): ExerciseReport => {
  const totalHours = exercises.reduce(
    (total, currentDay) => total + currentDay,
    0,
  );
  const trainingDays = exercises.filter((day) => day > 0).length;
  const average = totalHours / exercises.length;

  const ratio = average / target;
  let rating;
  let ratingDescription;

  if (ratio <= 0.75) {
    rating = 1;
    ratingDescription = "Pretty bad dude";
  } else if (ratio > 0.75 && ratio < 1) {
    rating = 2;
    ratingDescription = "Almost there! Just little bit more";
  } else if (ratio >= 1) {
    rating = 3;
    ratingDescription = "Great job! Keep up the good work";
  } else {
    rating = 0;
    ratingDescription = "You've broken the system";
  }

  return {
    trainingPeriod: exercises.length,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const { target, exercises } = parseParams(process.argv);

  console.log(calculateExercises(target, exercises));
} catch (error) {
  let errorMessage = `Something went wrong.`;

  if (error instanceof Error) {
    errorMessage += ` Error: ${error.message}`;
  }

  console.log(errorMessage);
}

export default calculateExercises;

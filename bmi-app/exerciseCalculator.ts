interface ExerciseReport {
  trainingPeriod: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (dailyExercises: number[], target: number): ExerciseReport => {
  const totalHours = dailyExercises.reduce((total, currentDay) => total + currentDay, 0)
  const trainingDays = dailyExercises.filter((day) => day > 0).length
  const average = totalHours / dailyExercises.length

  const ratio = average / target;
  let rating
  let ratingDescription

  if (ratio <= 0.75) {
    rating = 1
    ratingDescription = "Pretty bad dude"
  } else if (ratio > 0.75 && ratio < 1) {
    rating = 2
    ratingDescription = "Almost there! Just little bit more"
  } else if (ratio >= 1) {
    rating = 3
    ratingDescription = "Great job! Keep up the good work"
  } else {
    rating = 0
    ratingDescription = "You've broken the system"
  }

  return {
    trainingPeriod: dailyExercises.length,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average
  }
}

const exerciseArray = [4, 2, 5, 2, 3, 1, 1.5]

console.log(calculateExercises(exerciseArray, 2.5))
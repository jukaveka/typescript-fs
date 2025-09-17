import { isNotNumber } from "./utils/isNotNumber"

interface BodyMeasurements {
  heightInCm: number,
  weightInKg: number
}

const parseParams = (args: string[]): BodyMeasurements => {
  if (args.length < 4) throw new Error(`Too few arguments`);
  if (args.length > 4) throw new Error(`Too many arguments`);

  if (!isNotNumber(args[2]) && !isNotNumber(args[3])) {
    return {
      heightInCm: Number(args[2]),
      weightInKg: Number(args[3])
    }
  } else {
    throw new Error(`Height (cm) and weight (kg) are to be given as numbers`)
  }
}

const calculateBmi = (heightInCm: number, weightInKg: number) => {
  const heightInM = heightInCm / 100
  const bmi =  weightInKg / (heightInM*heightInM)

  if (bmi < 18.5) {
    return "Underweight range"
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal range"
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight range"
  } else if (bmi >= 30) {
    return "Obese range"
  } else {
    return "Defying laws of physics"
  }
}

try {
  const { heightInCm, weightInKg } = parseParams(process.argv);

  console.log(calculateBmi(heightInCm, weightInKg));
} catch (error) {
  let errorMessage = `Something went wrong. `

  if (error instanceof Error) {
    errorMessage += `Error: ${error.message}`
  }

  console.log(errorMessage)
}
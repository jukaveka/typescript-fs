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

console.log(calculateBmi(180, 74))
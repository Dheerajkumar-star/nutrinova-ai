export function calculateBMI(weight, height) {
  const heightM = height / 100
  const bmi = weight / (heightM * heightM)
  return parseFloat(bmi.toFixed(1))
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3b82f6' }
  if (bmi < 25) return { label: 'Normal', color: '#22c55e' }
  if (bmi < 30) return { label: 'Overweight', color: '#f59e0b' }
  return { label: 'Obese', color: '#ef4444' }
}

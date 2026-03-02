export function calculateHealthScore({ age, weight, height, water, exercise, sleep }) {
  let score = 0

  // BMI contribution (30 points)
  const bmi = weight / Math.pow(height / 100, 2)
  if (bmi >= 18.5 && bmi < 25) score += 30
  else if (bmi >= 25 && bmi < 30) score += 20
  else if (bmi >= 30) score += 10
  else score += 15

  // Water intake (20 points) — 8 glasses = full
  score += Math.min(20, (water / 8) * 20)

  // Exercise (25 points) — 1=none to 5=intense
  score += (exercise / 5) * 25

  // Sleep (25 points) — 7-9 hrs ideal
  if (sleep >= 7 && sleep <= 9) score += 25
  else if (sleep >= 6 && sleep < 7) score += 18
  else if (sleep >= 5 && sleep < 6) score += 10
  else score += 5

  return Math.round(Math.min(100, score))
}

export function getScoreStatus(score) {
  if (score >= 80) return { label: 'Excellent', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' }
  if (score >= 60) return { label: 'Good', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' }
  if (score >= 40) return { label: 'Moderate', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' }
  return { label: 'Poor', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' }
}

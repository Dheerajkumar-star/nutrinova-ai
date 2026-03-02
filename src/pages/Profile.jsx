import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import HealthScoreCard from '../components/health/HealthScoreCard'
import BMICalculator from '../components/health/BMICalculator'
import HealthChart from '../components/health/HealthChart'
import { calculateHealthScore } from '../utils/healthScore'
import { DIET_PLANS } from '../utils/constants'

export default function Profile() {
  const { user } = useAuth()
  const [form, setForm] = useState({
    age: '', weight: '', height: '',
    water: '', exercise: 3, sleep: ''
  })
  const [score, setScore] = useState(null)
  const [metrics, setMetrics] = useState(null)
  const [showDiet, setShowDiet] = useState(false)
  const [activeDay, setActiveDay] = useState(0)

  const handleCalculate = () => {
    const s = calculateHealthScore({
      age: Number(form.age),
      weight: Number(form.weight),
      height: Number(form.height),
      water: Number(form.water),
      exercise: Number(form.exercise),
      sleep: Number(form.sleep),
    })
    setScore(s)

    const bmi = Number(form.weight) / Math.pow(Number(form.height) / 100, 2)
    const bmiScore = bmi >= 18.5 && bmi < 25 ? 30 : bmi >= 25 && bmi < 30 ? 20 : 10
    setMetrics({
      bmiScore: Math.round(bmiScore),
      waterScore: Math.min(20, (form.water / 8) * 20),
      exerciseScore: (form.exercise / 5) * 25,
      sleepScore: form.sleep >= 7 && form.sleep <= 9 ? 25 : form.sleep >= 6 ? 18 : 10,
    })
  }

  const diet = DIET_PLANS.weightLoss

  return (
    <div className="min-h-screen page-bg pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl neon-text mb-2">📊 Health Tracker</h1>
          <p className="text-slate-400">Track your vitals and get your personalized health score</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Input form */}
          <div className="lg:col-span-1 glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 text-lg mb-4">📝 Your Vitals</h3>
            <div className="space-y-3">
              {[
                { key: 'age', label: 'Age (years)', placeholder: '25' },
                { key: 'weight', label: 'Weight (kg)', placeholder: '70' },
                { key: 'height', label: 'Height (cm)', placeholder: '170' },
                { key: 'water', label: 'Water (glasses/day)', placeholder: '8' },
                { key: 'sleep', label: 'Sleep (hours)', placeholder: '7' },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs text-slate-400 mb-1 block">{f.label}</label>
                  <input
                    type="number"
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-green-500/50"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-slate-400 mb-1 block">
                  Exercise Level: {['None', 'Light', 'Moderate', 'Active', 'Very Active'][form.exercise - 1]}
                </label>
                <input
                  type="range" min="1" max="5"
                  value={form.exercise}
                  onChange={e => setForm({ ...form, exercise: Number(e.target.value) })}
                  className="w-full accent-green-500"
                />
              </div>
              <button onClick={handleCalculate} className="neon-btn w-full text-sm py-3 mt-2">
                🎯 Calculate Score
              </button>
            </div>
          </div>

          {/* Score + Chart */}
          <div className="lg:col-span-2 space-y-6">
            {score !== null ? (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <HealthScoreCard score={score} />
                  <BMICalculator />
                </div>
                <HealthChart metrics={metrics} />
              </>
            ) : (
              <div className="glass neon-border rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 animate-float">📊</div>
                <h3 className="font-display text-slate-300 text-xl mb-2">Fill Your Vitals</h3>
                <p className="text-slate-400 text-sm">Enter your health data on the left to see your personalized health score and charts.</p>
              </div>
            )}
          </div>
        </div>

        {/* Diet Plan Generator */}
        <div className="glass neon-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-green-400 text-xl">🥗 7-Day Diet Plan</h3>
            <div className="flex gap-3">
              <button onClick={() => setShowDiet(!showDiet)} className="neon-btn text-sm">
                {showDiet ? 'Hide Plan' : '✨ Generate Diet Plan'}
              </button>
              {showDiet && (
                <button className="glass neon-border text-green-400 text-sm px-4 py-2 rounded-lg">
                  📥 Download PDF (Mock)
                </button>
              )}
            </div>
          </div>

          {showDiet && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {diet.map((d, i) => (
                  <button
                    key={d.day}
                    onClick={() => setActiveDay(i)}
                    className={`whitespace-nowrap text-xs px-3 py-1.5 rounded-full transition-all ${
                      activeDay === i ? 'bg-green-500 text-black font-bold' : 'glass neon-border text-slate-300'
                    }`}
                  >
                    {d.day}
                  </button>
                ))}
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-display text-green-400">{diet[activeDay].day}'s Plan</h4>
                  <span className="text-xs text-slate-400">🔥 {diet[activeDay].calories} cal</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: '☀️ Breakfast', value: diet[activeDay].breakfast },
                    { label: '🌤 Lunch', value: diet[activeDay].lunch },
                    { label: '🌙 Dinner', value: diet[activeDay].dinner },
                  ].map(meal => (
                    <div key={meal.label} className="bg-slate-800/50 rounded-xl p-3">
                      <p className="text-xs text-slate-400 mb-1">{meal.label}</p>
                      <p className="text-slate-200 text-sm">{meal.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

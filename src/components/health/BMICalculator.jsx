import { useState } from 'react'
import { motion } from 'framer-motion'
import { calculateBMI, getBMICategory } from '../../utils/bmiCalculator'

export default function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    if (!weight || !height) return
    const bmi = calculateBMI(Number(weight), Number(height))
    const cat = getBMICategory(bmi)
    setResult({ bmi, ...cat })
  }

  return (
    <div className="glass neon-border p-6 rounded-2xl">
      <h3 className="font-display text-green-400 text-lg mb-4">⚖️ BMI Calculator</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="70"
            className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-green-500/50"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="170"
            className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-green-500/50"
          />
        </div>
      </div>
      <button onClick={calculate} className="neon-btn w-full text-sm mb-4">Calculate BMI</button>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-4 rounded-xl"
          style={{ background: `${result.color}15`, border: `1px solid ${result.color}40` }}
        >
          <div className="text-4xl font-bold mb-1" style={{ color: result.color }}>{result.bmi}</div>
          <div className="text-sm font-display" style={{ color: result.color }}>{result.label}</div>
          <div className="text-xs text-slate-400 mt-1">BMI Index</div>
        </motion.div>
      )}
    </div>
  )
}

import { motion } from 'framer-motion'
import { getScoreStatus } from '../../utils/healthScore'

export default function HealthScoreCard({ score }) {
  const status = getScoreStatus(score)
  const circumference = 2 * Math.PI * 54
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="glass neon-border p-6 rounded-2xl flex flex-col items-center">
      <h3 className="font-display text-green-400 text-lg mb-4">🏆 Health Score</h3>
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(30,41,59,0.8)" strokeWidth="10" />
          <motion.circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke={status.color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 8px ${status.color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold" style={{ color: status.color }}>{score}</span>
          <span className="text-xs text-slate-400">/100</span>
        </div>
      </div>
      <div
        className="mt-4 px-4 py-1 rounded-full text-sm font-display font-bold"
        style={{ color: status.color, background: status.bg }}
      >
        {status.label}
      </div>
    </div>
  )
}

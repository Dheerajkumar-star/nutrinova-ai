import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import HealthScoreCard from '../components/health/HealthScoreCard'

const BADGES = [
  { id: 1, icon: '🌿', name: 'Green Starter', desc: 'First eco product purchased', earned: true },
  { id: 2, icon: '💧', name: 'Hydration Hero', desc: 'Logged 8 glasses for 7 days', earned: true },
  { id: 3, icon: '🥗', name: 'Salad Streak', desc: '5 healthy meals in a row', earned: true },
  { id: 4, icon: '🏃', name: 'Active Week', desc: 'Exercise 5 days this week', earned: false },
  { id: 5, icon: '🎯', name: 'Goal Crusher', desc: 'Reached first health goal', earned: false },
  { id: 6, icon: '💚', name: 'Eco Champion', desc: 'Reduced plastic by 50%', earned: false },
]

const RECOMMENDED = [
  { id: 1, name: 'Ragi Porridge', reason: 'High fiber, good for your BMI', icon: '🌾' },
  { id: 2, name: 'Chia Pudding', reason: 'Omega-3 boosts brain health', icon: '🫘' },
  { id: 3, name: 'Green Smoothie', reason: 'Morning energy boost', icon: '🥤' },
]

export default function Dashboard() {
  const { user } = useAuth()
  const [healthScore] = useState(72)
  const [ecoScore] = useState(85)

  return (
    <div className="min-h-screen page-bg grid-bg pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl">
            <span className="text-slate-300">Welcome back, </span>
            <span className="neon-text">{user?.name?.split(' ')[0] || 'User'} 👋</span>
          </h1>
          <p className="text-slate-400 mt-1">Your health dashboard for today</p>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { to: '/marketplace', icon: '🛒', label: 'Marketplace' },
            { to: '/chatbot', icon: '🤖', label: 'AI Chatbot' },
            { to: '/profile', icon: '📊', label: 'Health Tracker' },
            { to: '/cart', icon: '🛍', label: 'My Cart' },
          ].map(link => (
            <Link key={link.to} to={link.to}>
              <motion.div
                whileHover={{ y: -3 }}
                className="glass neon-border rounded-xl p-4 text-center hover:bg-green-500/5 transition-all"
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <div className="text-sm text-slate-300 font-medium">{link.label}</div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <HealthScoreCard score={healthScore} />

          {/* Eco score */}
          <div className="glass neon-border rounded-2xl p-6 flex flex-col items-center">
            <h3 className="font-display text-green-400 text-lg mb-4">🌍 Eco Impact Score</h3>
            <div className="relative w-36 h-36">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(30,41,59,0.8)" strokeWidth="10" />
                <motion.circle
                  cx="60" cy="60" r="54"
                  fill="none" stroke="#22c55e" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 54}
                  initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - ecoScore / 100) }}
                  transition={{ duration: 1.5 }}
                  style={{ filter: 'drop-shadow(0 0 8px #22c55e)' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-green-400">{ecoScore}</span>
                <span className="text-xs text-slate-400">/100</span>
              </div>
            </div>
            <div className="mt-4 px-4 py-1 rounded-full text-sm font-display font-bold text-green-400 bg-green-500/10">
              Eco Warrior 🌱
            </div>
          </div>

          {/* Today's Goals */}
          <div className="glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 text-lg mb-4">🎯 Today's Goals</h3>
            <div className="space-y-4">
              {[
                { label: 'Water Intake', value: 6, max: 8, icon: '💧', unit: 'glasses' },
                { label: 'Exercise', value: 30, max: 45, icon: '🏃', unit: 'mins' },
                { label: 'Sleep', value: 7, max: 8, icon: '😴', unit: 'hrs' },
              ].map(g => (
                <div key={g.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{g.icon} {g.label}</span>
                    <span className="text-green-400">{g.value}/{g.max} {g.unit}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-green-500 transition-all"
                      style={{ width: `${(g.value / g.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended + Badges */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recommended Foods */}
          <div className="glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 text-lg mb-4">⭐ Recommended For You</h3>
            <div className="space-y-3">
              {RECOMMENDED.map(food => (
                <div key={food.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-green-500/5 transition-all">
                  <span className="text-3xl">{food.icon}</span>
                  <div>
                    <p className="text-slate-200 font-medium text-sm">{food.name}</p>
                    <p className="text-slate-400 text-xs">{food.reason}</p>
                  </div>
                </div>
              ))}
              <Link to="/marketplace" className="block text-center text-green-400 text-xs hover:text-green-300 mt-2">
                View All Products →
              </Link>
            </div>
          </div>

          {/* Badges */}
          <div className="glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 text-lg mb-4">🏆 Achievements</h3>
            <div className="grid grid-cols-3 gap-3">
              {BADGES.map(badge => (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.05 }}
                  className={`text-center p-3 rounded-xl transition-all ${
                    badge.earned
                      ? 'glass neon-border'
                      : 'bg-slate-800/30 border border-slate-700/30 opacity-50'
                  }`}
                  title={badge.desc}
                >
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs text-slate-400 leading-tight">{badge.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

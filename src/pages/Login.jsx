import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { authService } from '../services/authService'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const user = await authService.login(form.email, form.password)
      login(user)
      navigate('/disclaimer')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const demoLogin = (role) => {
    setForm(role === 'admin'
      ? { email: 'admin@nutrinova.com', password: 'admin123' }
      : { email: 'user@nutrinova.com', password: 'user123' }
    )
  }

  return (
    <div className="min-h-screen page-bg grid-bg flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass neon-border rounded-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <span className="text-5xl">🔐</span>
          <h1 className="font-display text-2xl neon-text mt-3 mb-1">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in to NutriNova AI</p>
        </div>

        {/* Demo buttons */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => demoLogin('user')} className="flex-1 text-xs py-2 glass neon-border text-green-400 rounded-lg hover:bg-green-500/10 transition-all">
            👤 Demo User
          </button>
          <button onClick={() => demoLogin('admin')} className="flex-1 text-xs py-2 glass border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all">
            🛡 Demo Admin
          </button>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg p-3 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', icon: '📧' },
            { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••', icon: '🔒' },
          ].map(field => (
            <div key={field.name}>
              <label className="text-xs text-slate-400 mb-1 block">{field.label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">{field.icon}</span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                  required
                  className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg pl-9 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-green-500/50"
                />
              </div>
            </div>
          ))}

          <button type="submit" disabled={loading} className="neon-btn w-full py-3 text-sm mt-2">
            {loading ? '⏳ Signing In...' : '🔐 Login'}
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          New here?{' '}
          <Link to="/register" className="text-green-400 hover:text-green-300 transition-colors">Create Account →</Link>
        </p>
      </motion.div>
    </div>
  )
}

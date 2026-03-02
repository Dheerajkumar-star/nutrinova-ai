import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const features = [
  { icon: '🛒', title: 'Smart Marketplace', desc: 'Shop organic, diabetes-friendly, and eco-certified products with AI recommendations.' },
  { icon: '🤖', title: 'AI Chatbot', desc: 'Get personalized food advice, diet plans, and health tips from your AI nutritionist.' },
  { icon: '📊', title: 'Health Tracking', desc: 'Track your BMI, health score, water intake, exercise and sleep patterns.' },
  { icon: '🌿', title: 'Eco Impact', desc: 'Every purchase tracked for sustainability. See your eco footprint and make green choices.' },
  { icon: '🌍', title: 'Multi-Language', desc: 'Full support for English, Tamil, and Hindi.' },
  { icon: '🏆', title: 'Achievements', desc: 'Earn badges as you build healthier habits and hit your nutrition goals.' },
]

const stats = [
  { value: '10K+', label: 'Happy Users' },
  { value: '500+', label: 'Healthy Products' },
  { value: '98%', label: 'Satisfaction' },
  { value: '7', label: 'Languages' },
]

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="page-bg grid-bg">
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(#22c55e, transparent)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(#3b82f6, transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass neon-border px-4 py-2 rounded-full text-sm text-green-400 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t('hero.tagline')}
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight mb-4">
              <span className="text-slate-100">{t('hero.title')}</span>
              <br />
              <span className="neon-text">{t('hero.title2')}</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="neon-btn text-base px-6 py-3">
                🚀 {t('hero.cta')}
              </Link>
              <Link to="/marketplace" className="px-6 py-3 rounded-lg glass neon-border text-green-400 hover:bg-green-500/10 transition-all font-display text-base">
                {t('hero.explore')} →
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-12">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-bold text-2xl neon-text">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ background: 'radial-gradient(rgba(34,197,94,0.2), transparent)' }} />
              <div className="absolute inset-8 glass neon-border rounded-full flex items-center justify-center">
                <span className="text-8xl animate-float">🌿</span>
              </div>
              {/* Orbiting badges */}
              {['🥗', '💪', '🧠', '❤️'].map((emoji, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 glass neon-border rounded-full flex items-center justify-center text-2xl"
                  style={{
                    top: `${50 + 45 * Math.sin((i / 4) * Math.PI * 2)}%`,
                    left: `${50 + 45 * Math.cos((i / 4) * Math.PI * 2)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-3xl text-center neon-text mb-12"
          >
            Everything You Need
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass neon-border p-6 rounded-2xl"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-display text-green-400 font-bold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass neon-border rounded-3xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="font-display text-2xl text-green-400 mb-3">Connect on WhatsApp</h2>
            <p className="text-slate-400 mb-6">Get instant nutrition advice on WhatsApp. Available 24/7.</p>
            <div className="glass rounded-2xl p-4 max-w-xs mx-auto mb-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm">🌿</div>
                <span className="text-xs text-slate-400">NutriNova AI</span>
              </div>
              <div className="space-y-2">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-2 text-xs text-slate-300">Hello! How can I help your nutrition journey today? 🥗</div>
                <div className="bg-slate-700 rounded-xl p-2 text-xs text-slate-300 ml-4">I want a diet plan for weight loss</div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-2 text-xs text-slate-300">Great! I'll create a personalized 7-day plan for you...</div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1ebe5c] transition-colors">
              <span>📱</span> Connect on WhatsApp (Demo)
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

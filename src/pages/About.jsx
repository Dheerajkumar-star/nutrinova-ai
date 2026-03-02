import { motion } from 'framer-motion'

const team = [
  { name: 'Dr. Priya Nair', role: 'Chief Nutritionist', emoji: '👩‍⚕️' },
  { name: 'Arjun Kumar', role: 'AI Engineer', emoji: '👨‍💻' },
  { name: 'Meera Iyer', role: 'Sustainability Lead', emoji: '🌿' },
]

export default function About() {
  return (
    <div className="min-h-screen page-bg pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-6xl">🌿</span>
          <h1 className="font-display text-4xl neon-text mt-4 mb-4">About NutriNova AI</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We're on a mission to make personalized nutrition accessible to everyone through the power of artificial intelligence and sustainable food choices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '🤖', title: 'AI-First', desc: 'Every recommendation powered by intelligent algorithms trained on nutritional science.' },
            { icon: '🌱', title: 'Eco-Conscious', desc: 'Every product tracked for environmental impact. Shop green, live clean.' },
            { icon: '🌍', title: 'Inclusive', desc: 'Available in English, Tamil, and Hindi. Nutrition for all.' },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass neon-border rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-display text-green-400 mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="font-display text-2xl neon-text text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass neon-border rounded-2xl p-6 text-center"
            >
              <div className="text-5xl mb-3">{m.emoji}</div>
              <h3 className="text-slate-200 font-semibold">{m.name}</h3>
              <p className="text-green-400 text-sm">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

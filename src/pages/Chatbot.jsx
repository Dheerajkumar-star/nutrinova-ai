import { motion } from 'framer-motion'
import ChatbotComponent from '../components/chatbot/Chatbot'

export default function ChatbotPage() {
  return (
    <div className="min-h-screen page-bg pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-3xl neon-text mb-2">🤖 AI Nutritionist</h1>
          <p className="text-slate-400">Get instant, personalized nutrition advice powered by AI</p>
        </motion.div>

        <div className="glass neon-border rounded-2xl overflow-hidden relative">
          <ChatbotComponent />
        </div>

        <div className="mt-4 glass rounded-xl p-3 text-xs text-slate-400 text-center neon-border">
          ⚠️ AI responses are for informational purposes only and not medical advice.
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'

export default function ChatMessage({ message }) {
  const isBot = message.from === 'bot'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}
    >
      {isBot && <span className="text-2xl mr-2 self-end">🌿</span>}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? 'glass neon-border text-slate-200'
            : 'bg-green-500 text-black font-medium'
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  )
}

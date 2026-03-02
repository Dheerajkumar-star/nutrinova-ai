import { motion } from 'framer-motion'
import { useVoice } from '../../hooks/useVoice'

export default function VoiceButton({ onResult }) {
  const { isListening, startListening, stopListening, supported } = useVoice()

  const handleClick = () => {
    if (isListening) {
      stopListening()
    } else {
      const { startListening: start } = useVoice()
      startListening()
    }
  }

  if (!supported) return null

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        if (isListening) stopListening()
        else {
          startListening()
        }
      }}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        isListening
          ? 'bg-red-500 animate-pulse-glow'
          : 'glass neon-border hover:bg-green-500/20'
      }`}
    >
      <span className="text-lg">{isListening ? '⏹' : '🎙'}</span>
    </motion.button>
  )
}

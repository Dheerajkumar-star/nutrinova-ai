import { motion } from 'framer-motion'

const OPTIONS = [
  'What is your health problem?',
  'Suggest good food products',
  'Junk foods to avoid',
  'Personalized diet plan',
  'Allergy safe foods',
  'Weight loss foods',
  'Muscle gain foods',
  'Brain boosting foods',
  'Heart healthy foods',
  'Diabetes friendly foods',
]

export default function QuickOptions({ onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-1 scrollbar-hide">
      {OPTIONS.map((opt, i) => (
        <motion.button
          key={opt}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          onClick={() => onSelect(opt)}
          className="whitespace-nowrap text-xs px-3 py-2 rounded-full glass neon-border text-green-400 hover:bg-green-500 hover:text-black transition-all flex-shrink-0"
        >
          {opt}
        </motion.button>
      ))}
    </div>
  )
}

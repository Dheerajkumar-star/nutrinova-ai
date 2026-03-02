import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../context/AuthContext'

export default function Disclaimer() {
  const { t } = useTranslation()
  const { acceptDisclaimer } = useAuth()
  const navigate = useNavigate()

  const handleAccept = () => {
    acceptDisclaimer()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen page-bg grid-bg flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass neon-border rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-6xl mb-6"
        >
          ⚠️
        </motion.div>
        <h1 className="font-display text-3xl neon-text mb-4">{t('disclaimer.title')}</h1>

        <div className="glass rounded-xl p-6 mb-8 text-left">
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            {t('disclaimer.text')}
          </p>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✓</span>
              <span>All health scores and BMI calculations are estimations for general wellness tracking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✓</span>
              <span>Dietary recommendations are based on general nutritional guidelines, not personalized medical advice.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✓</span>
              <span>Always consult a qualified healthcare professional before starting any new diet or exercise program.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✓</span>
              <span>Product information and nutritional data are provided for informational purposes only.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAccept}
            className="neon-btn px-8 py-4 text-base"
          >
            ✅ {t('disclaimer.accept')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/')}
            className="px-8 py-4 rounded-lg glass border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all font-display text-base"
          >
            {t('disclaimer.decline')}
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="glass border-t border-green-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-display font-bold neon-text">NutriNova AI</span>
            </div>
            <p className="text-slate-400 text-sm">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="font-display text-green-400 text-sm mb-3">Platform</h4>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <Link to="/marketplace" className="hover:text-green-400 transition-colors">Marketplace</Link>
              <Link to="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link>
              <Link to="/chatbot" className="hover:text-green-400 transition-colors">AI Chatbot</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-green-400 text-sm mb-3">Company</h4>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link>
              <Link to="/disclaimer" className="hover:text-green-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-green-400 text-sm mb-3">Connect</h4>
            <div className="flex gap-3 text-2xl">
              <span className="cursor-pointer hover:scale-110 transition-transform">🐦</span>
              <span className="cursor-pointer hover:scale-110 transition-transform">📘</span>
              <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
              <span className="cursor-pointer hover:scale-110 transition-transform">💼</span>
            </div>
          </div>
        </div>
        <div className="border-t border-green-500/10 pt-6 text-center text-slate-500 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}

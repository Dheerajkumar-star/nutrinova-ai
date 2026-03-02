import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar({ darkMode, setDarkMode }) {
  const { t } = useTranslation()
  const { user, logout } = useAuth()
  const { count } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navLinks = user
    ? [
        { to: '/dashboard', label: t('nav.dashboard') },
        { to: '/marketplace', label: t('nav.marketplace') },
        { to: '/chatbot', label: t('nav.chatbot') },
        { to: '/profile', label: t('nav.profile') },
        ...(user.role === 'admin' ? [{ to: '/admin', label: t('nav.admin') }] : []),
      ]
    : [
        { to: '/', label: t('nav.home') },
        { to: '/register', label: t('nav.register') },
        { to: '/login', label: t('nav.login') },
      ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-display text-lg font-bold neon-text">NutriNova</span>
          <span className="text-xs text-green-400/60 font-display">AI</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-all duration-200 hover:text-green-400 ${
                location.pathname === link.to ? 'text-green-400' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 h-8 flex items-center justify-center rounded-full glass text-lg"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {user && (
            <Link to="/cart" className="relative p-2">
              <span className="text-xl">🛒</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Hi, {user.name?.split(' ')[0]}</span>
              <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300 transition-colors">
                {t('nav.logout')}
              </button>
            </div>
          ) : (
            <Link to="/login" className="neon-btn text-sm">
              {t('nav.login')}
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-green-400 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-green-500/20 px-4 py-4 flex flex-col gap-3"
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-green-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <>
                <Link to="/cart" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-green-400 py-1">
                  🛒 Cart {count > 0 && `(${count})`}
                </Link>
                <button onClick={handleLogout} className="text-red-400 text-left py-1">Logout</button>
              </>
            )}
            <LanguageSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

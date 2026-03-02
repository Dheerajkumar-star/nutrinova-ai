import { useLanguage } from '../context/LanguageContext'

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
]

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage()
  return (
    <div className="flex items-center gap-1">
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => changeLanguage(l.code)}
          className={`text-xs px-2 py-1 rounded transition-all ${
            lang === l.code
              ? 'bg-green-500 text-black font-bold'
              : 'text-slate-400 hover:text-green-400'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}

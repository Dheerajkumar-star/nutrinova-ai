import { CATEGORIES } from '../../utils/constants'

export default function FilterPanel({ active, setActive, search, setSearch }) {
  return (
    <div className="glass neon-border rounded-2xl p-4 mb-6">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="🔍 Search products..."
        className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-green-500/50 mb-4"
      />
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
              active === cat.id
                ? 'bg-green-500 text-black font-bold'
                : 'glass neon-border text-slate-300 hover:text-green-400'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}

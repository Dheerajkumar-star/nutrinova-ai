import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [showJunkWarning, setShowJunkWarning] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (product.isJunk) {
      setShowJunkWarning(true)
    } else {
      confirmAdd()
    }
  }

  const confirmAdd = () => {
    addItem(product)
    setAdded(true)
    setShowJunkWarning(false)
    setTimeout(() => setAdded(false), 2000)
  }

  const ecoColor = product.ecoScore >= 80 ? '#22c55e' : product.ecoScore >= 60 ? '#f59e0b' : '#ef4444'

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        className="glass neon-border rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Image/Emoji area */}
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-6xl relative">
          {product.image}
          {product.isJunk && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
              ⚠️ JUNK
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-slate-200 mb-1 text-sm">{product.name}</h3>
          <p className="text-xs text-slate-400 mb-3 flex-1">{product.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                {tag}
              </span>
            ))}
            {product.allergens.length > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                ⚠️ {product.allergens[0]}
              </span>
            )}
          </div>

          {/* Eco score */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-slate-400">Eco:</span>
            <div className="flex-1 h-1.5 rounded-full bg-slate-700">
              <div className="h-full rounded-full transition-all" style={{ width: `${product.ecoScore}%`, background: ecoColor }} />
            </div>
            <span className="text-xs font-bold" style={{ color: ecoColor }}>{product.ecoScore}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-green-400">₹{product.price}</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAdd}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                added ? 'bg-green-500 text-black' : 'neon-btn'
              }`}
            >
              {added ? '✓ Added' : '+ Cart'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Junk warning modal */}
      <AnimatePresence>
        {showJunkWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setShowJunkWarning(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={e => e.stopPropagation()}
              className="glass p-6 rounded-2xl max-w-sm w-full border border-red-500/40 text-center"
            >
              <div className="text-5xl mb-3">⚠️</div>
              <h3 className="font-display text-red-400 text-lg mb-2">Junk Food Warning!</h3>
              <p className="text-slate-300 text-sm mb-4">
                <strong>{product.name}</strong> is highly processed and may negatively impact your health goals. Are you sure you want to add it?
              </p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => setShowJunkWarning(false)} className="px-4 py-2 rounded-lg glass text-slate-300 text-sm">Cancel</button>
                <button onClick={confirmAdd} className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-bold">Add Anyway</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

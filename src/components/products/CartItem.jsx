import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart()
  return (
    <motion.div
      layout
      exit={{ opacity: 0, x: -20 }}
      className="glass neon-border rounded-xl p-4 flex items-center gap-4"
    >
      <span className="text-3xl">{item.image}</span>
      <div className="flex-1">
        <h4 className="text-slate-200 font-medium text-sm">{item.name}</h4>
        <p className="text-green-400 font-bold text-sm">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors">−</button>
        <span className="text-slate-200 font-bold w-6 text-center">{item.qty}</span>
        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors">+</button>
      </div>
      <div className="text-right">
        <p className="text-slate-200 font-bold text-sm">₹{(item.price * item.qty).toLocaleString()}</p>
        <button onClick={() => removeItem(item.id)} className="text-xs text-red-400 hover:text-red-300 transition-colors">Remove</button>
      </div>
    </motion.div>
  )
}

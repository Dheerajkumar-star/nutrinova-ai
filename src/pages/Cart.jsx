import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import CartItem from '../components/products/CartItem'

export default function Cart() {
  const { items, total, clearCart } = useCart()
  const [ordered, setOrdered] = useState(false)

  const handleOrder = () => {
    clearCart()
    setOrdered(true)
  }

  if (ordered) return (
    <div className="min-h-screen page-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass neon-border rounded-2xl p-12 text-center max-w-md"
      >
        <div className="text-6xl mb-4">✅</div>
        <h2 className="font-display text-2xl neon-text mb-2">Order Placed!</h2>
        <p className="text-slate-400 mb-6">Thank you for your order. Your healthy products are on the way!</p>
        <Link to="/marketplace" className="neon-btn inline-block">Continue Shopping</Link>
      </motion.div>
    </div>
  )

  return (
    <div className="min-h-screen page-bg pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl neon-text mb-8"
        >
          🛒 Your Cart
        </motion.h1>

        {items.length === 0 ? (
          <div className="glass neon-border rounded-2xl p-16 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="font-display text-xl text-slate-300 mb-2">Cart is empty</h2>
            <p className="text-slate-400 mb-6">Add some healthy products!</p>
            <Link to="/marketplace" className="neon-btn inline-block">Browse Marketplace</Link>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              <AnimatePresence>
                {items.map(item => <CartItem key={item.id} item={item} />)}
              </AnimatePresence>
            </div>

            <div className="glass neon-border rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400">Subtotal ({items.length} items)</span>
                <span className="text-xl font-bold neon-text">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-slate-400">Delivery</span>
                <span className="text-green-400">{total > 500 ? 'FREE' : '₹49'}</span>
              </div>
              {total <= 500 && (
                <p className="text-xs text-slate-400 mb-4">Add ₹{500 - total} more for free delivery</p>
              )}
              <div className="flex gap-3">
                <button
                  onClick={handleOrder}
                  className="flex-1 neon-btn py-3 text-base"
                >
                  🎉 Place Order (Mock)
                </button>
                <button onClick={clearCart} className="px-4 py-3 rounded-lg glass border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-all">
                  Clear
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

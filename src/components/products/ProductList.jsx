import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  if (!products.length) return (
    <div className="text-center py-16 text-slate-400">
      <div className="text-5xl mb-4">🔍</div>
      <p className="font-display">No products found</p>
    </div>
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  )
}

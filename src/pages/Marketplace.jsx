import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import FilterPanel from '../components/products/FilterPanel'
import ProductList from '../components/products/ProductList'
import { productService } from '../services/productService'

export default function Marketplace() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  const products = useMemo(() => {
    let list = productService.getByCategory(category)
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.description.toLowerCase().includes(q)
      )
    }
    return list
  }, [category, search])

  return (
    <div className="min-h-screen page-bg grid-bg pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl neon-text mb-2">🛒 Smart Marketplace</h1>
          <p className="text-slate-400">Discover organic, sustainable, and health-optimized products</p>
        </motion.div>

        <FilterPanel
          active={category}
          setActive={setCategory}
          search={search}
          setSearch={setSearch}
        />

        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-400 text-sm">{products.length} products found</p>
        </div>

        <ProductList products={products} />
      </div>
    </div>
  )
}

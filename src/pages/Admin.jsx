import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, ArcElement,
  Title, Tooltip, Legend
} from 'chart.js'
import { DUMMY_USERS, PRODUCTS } from '../utils/constants'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

export default function Admin() {
  const [form, setForm] = useState({ name: '', category: 'organic', price: '', ecoScore: '', image: '🌿' })
  const [addedProducts, setAddedProducts] = useState([])
  const [successMsg, setSuccessMsg] = useState('')

  const handleAddProduct = (e) => {
    e.preventDefault()
    setAddedProducts(prev => [...prev, { ...form, id: Date.now() }])
    setSuccessMsg(`✅ "${form.name}" added successfully!`)
    setForm({ name: '', category: 'organic', price: '', ecoScore: '', image: '🌿' })
    setTimeout(() => setSuccessMsg(''), 3000)
  }

  const salesData = {
    labels: PRODUCTS.slice(0, 8).map(p => p.name.substring(0, 12)),
    datasets: [{
      label: 'Units Sold',
      data: [45, 38, 62, 28, 51, 33, 44, 29],
      backgroundColor: 'rgba(34,197,94,0.7)',
      borderColor: '#22c55e',
      borderWidth: 2,
      borderRadius: 6,
    }]
  }

  const categoryData = {
    labels: ['Organic', 'Millets', 'Protein', 'Diabetes', 'Eco'],
    datasets: [{
      data: [35, 20, 25, 12, 8],
      backgroundColor: ['#22c55e', '#3b82f6', '#f59e0b', '#a855f7', '#06b6d4'],
      borderWidth: 0,
    }]
  }

  const chartOpts = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1e293b', borderColor: '#22c55e', borderWidth: 1 } },
    scales: { y: { grid: { color: 'rgba(34,197,94,0.1)' }, ticks: { color: '#94a3b8' } }, x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 10 } } } }
  }

  return (
    <div className="min-h-screen page-bg pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xl">🛡</div>
          <div>
            <h1 className="font-display text-3xl text-purple-400">Admin Panel</h1>
            <p className="text-slate-400 text-sm">Manage your NutriNova platform</p>
          </div>
        </motion.div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Users', value: DUMMY_USERS.length + addedProducts.length, icon: '👥', color: 'text-blue-400' },
            { label: 'Products', value: PRODUCTS.length + addedProducts.length, icon: '📦', color: 'text-green-400' },
            { label: 'Revenue', value: '₹1.2L', icon: '💰', color: 'text-yellow-400' },
            { label: 'Orders Today', value: 47, icon: '📋', color: 'text-purple-400' },
          ].map(card => (
            <div key={card.label} className="glass neon-border rounded-xl p-4">
              <div className="text-2xl mb-2">{card.icon}</div>
              <div className={`text-2xl font-bold font-display ${card.color}`}>{card.value}</div>
              <div className="text-xs text-slate-400">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 mb-4">📊 Top Selling Products</h3>
            <Bar data={salesData} options={chartOpts} />
          </div>
          <div className="glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 mb-4">📂 Category Split</h3>
            <Doughnut
              data={categoryData}
              options={{ responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 10 } } } } }}
            />
          </div>
        </div>

        {/* Add Product + Users */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add Product */}
          <div className="glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 text-lg mb-4">➕ Add Product</h3>
            {successMsg && <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg p-3 mb-4">{successMsg}</div>}
            <form onSubmit={handleAddProduct} className="space-y-3">
              {[
                { key: 'name', label: 'Product Name', placeholder: 'Organic Quinoa' },
                { key: 'price', label: 'Price (₹)', placeholder: '299', type: 'number' },
                { key: 'ecoScore', label: 'Eco Score (0-100)', placeholder: '85', type: 'number' },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs text-slate-400 mb-1 block">{f.label}</label>
                  <input
                    type={f.type || 'text'}
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    required
                    className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-green-500/50"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Category</label>
                <select
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-slate-800/50 border border-green-500/20 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none"
                >
                  {['organic', 'millets', 'protein', 'diabetes', 'eco'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="neon-btn w-full text-sm py-3">Add Product</button>
            </form>
          </div>

          {/* Users list */}
          <div className="glass neon-border rounded-2xl p-6">
            <h3 className="font-display text-green-400 text-lg mb-4">👥 Registered Users</h3>
            <div className="space-y-2 overflow-y-auto max-h-80">
              {DUMMY_USERS.map(u => (
                <div key={u.id} className="flex items-center justify-between p-3 bg-slate-800/40 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm font-bold text-green-400">
                      {u.name[0]}
                    </div>
                    <div>
                      <p className="text-slate-200 text-sm font-medium">{u.name}</p>
                      <p className="text-slate-400 text-xs">{u.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 text-xs font-bold">{u.healthScore}/100</p>
                    <p className="text-slate-500 text-xs">{u.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

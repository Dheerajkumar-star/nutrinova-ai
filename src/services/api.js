// Mock API service - simulates async calls
import { PRODUCTS } from '../utils/constants'

const delay = (ms = 400) => new Promise(r => setTimeout(r, ms))

export const api = {
  async getProducts() {
    await delay()
    return PRODUCTS
  },
  async getProduct(id) {
    await delay()
    return PRODUCTS.find(p => p.id === id)
  },
  async searchProducts(query) {
    await delay()
    const q = query.toLowerCase()
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    )
  },
}

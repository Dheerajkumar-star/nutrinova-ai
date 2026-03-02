import { PRODUCTS } from '../utils/constants'

export const productService = {
  getAll: () => PRODUCTS,
  getByCategory: (cat) => cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat),
  getById: (id) => PRODUCTS.find(p => p.id === id),
}

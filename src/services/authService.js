const delay = (ms = 500) => new Promise(r => setTimeout(r, ms))

export const authService = {
  async login(email, password) {
    await delay()
    if (password.length < 4) throw new Error('Invalid credentials')
    return { name: email.split('@')[0], email, id: Date.now() }
  },
  async register(name, email, password) {
    await delay()
    if (password.length < 6) throw new Error('Password must be at least 6 characters')
    return { name, email, id: Date.now() }
  },
}

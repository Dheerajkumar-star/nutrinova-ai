import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('nutrinova_user')
    const storedDisclaimer = localStorage.getItem('nutrinova_disclaimer')
    if (storedUser) setUser(JSON.parse(storedUser))
    if (storedDisclaimer === 'true') setDisclaimerAccepted(true)
    setLoading(false)
  }, [])

  const login = (userData) => {
    const user = { ...userData, role: userData.email === 'admin@nutrinova.com' ? 'admin' : 'user' }
    setUser(user)
    localStorage.setItem('nutrinova_user', JSON.stringify(user))
  }

  const register = (userData) => {
    const user = { ...userData, role: 'user', joined: new Date().toISOString() }
    setUser(user)
    localStorage.setItem('nutrinova_user', JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    setDisclaimerAccepted(false)
    localStorage.removeItem('nutrinova_user')
    localStorage.removeItem('nutrinova_disclaimer')
  }

  const acceptDisclaimer = () => {
    setDisclaimerAccepted(true)
    localStorage.setItem('nutrinova_disclaimer', 'true')
  }

  return (
    <AuthContext.Provider value={{ user, disclaimerAccepted, loading, login, register, logout, acceptDisclaimer }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

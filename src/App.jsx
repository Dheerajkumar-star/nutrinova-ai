import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <LanguageProvider>
            <div className={darkMode ? 'dark' : 'light'}>
              <div className="min-h-screen flex flex-col bg-dark text-slate-100 font-body">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <main className="flex-1">
                  <AppRoutes />
                </main>
                <Footer />
              </div>
            </div>
          </LanguageProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Disclaimer from '../pages/Disclaimer'
import Dashboard from '../pages/Dashboard'
import Marketplace from '../pages/Marketplace'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import Admin from '../pages/Admin'
import ChatbotPage from '../pages/Chatbot'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/disclaimer" element={
        <ProtectedRoute requireDisclaimer={false}><Disclaimer /></ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />
      <Route path="/marketplace" element={
        <ProtectedRoute><Marketplace /></ProtectedRoute>
      } />
      <Route path="/cart" element={
        <ProtectedRoute><Cart /></ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute><Profile /></ProtectedRoute>
      } />
      <Route path="/chatbot" element={
        <ProtectedRoute><ChatbotPage /></ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute adminOnly={true}><Admin /></ProtectedRoute>
      } />
    </Routes>
  )
}

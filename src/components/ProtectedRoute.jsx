import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, requireDisclaimer = true, adminOnly = false }) {
  const { user, disclaimerAccepted, loading } = useAuth()

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center page-bg">
      <div className="neon-text font-display text-xl animate-pulse">Loading...</div>
    </div>
  )

  if (!user) return <Navigate to="/login" replace />
  if (requireDisclaimer && !disclaimerAccepted) return <Navigate to="/disclaimer" replace />
  if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" replace />

  return children
}

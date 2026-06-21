import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/login" replace />
  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

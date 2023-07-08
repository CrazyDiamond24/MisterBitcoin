// RouteWrapper.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const RouteWrapper = ({ component: Component }) => {
  const navigate = useNavigate()

  return <Component history={{ push: (path) => navigate(path) }} />
}

export default RouteWrapper

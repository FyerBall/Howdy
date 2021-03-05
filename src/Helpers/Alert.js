import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Alert({ message, type, showAlert }) {
  const history = useHistory()

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert()
      history.push(`/demo`)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return <p className={`alert alert-${type}`}>{message}</p>
}

export default Alert

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordReset from './pages/PasswordReset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PasswordReset/>
    </>
  )
}

export default App

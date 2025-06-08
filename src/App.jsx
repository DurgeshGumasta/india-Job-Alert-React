import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import HomePage from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <HomePage/>
      </Layout>
    </>
  )
}

export default App

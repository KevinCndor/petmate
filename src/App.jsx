import { useState } from 'react'
import './App.css'
import ListaMascotas from './components/organismo/ListaMascotas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contenedor">
        <ListaMascotas />
      </div>
    </>
  )
}

export default App

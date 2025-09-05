
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <button onClick={() => setCount(count + 1)} title='Increment'>Aumentar</button>
    <button onClick={() => setCount(count - 1)} title='Decrement'>Dimiuir</button>
    <button onClick={() => setCount(0)}>Resetar</button>
    <p title='Contador'>{count}</p>
    </div>
  )
}

export default App

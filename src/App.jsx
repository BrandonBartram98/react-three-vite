import { useState } from 'react'
import reactLogo from './assets/react.svg'
import threeLogo from './assets/threejs.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* R3F Canvas */}
      <Canvas>
        <Perf />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>

      {/* REMOVE THIS */}
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://threejs.org" target="_blank">
          <img src={threeLogo} className="logo three" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>react-three-vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App

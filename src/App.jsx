import { useState } from 'react'
import firstSlide from './components/firstSlide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
     <firstSlide />
    </div>
  )
}

export default App

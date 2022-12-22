import { useState } from 'react'
import reactLogo from './assets/react.svg'
import firstSlide from './components/FirstSlide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
     <firstSlide />
     <h1>helllo</h1>
    </div>
  )
}

export default App

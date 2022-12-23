import { useState } from 'react'
import MainPage from './components/MainPage'
import Questionpage from './components/QuestionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      
      {/* <MainPage /> */}
      <Questionpage />
    </div>
  )
}

export default App

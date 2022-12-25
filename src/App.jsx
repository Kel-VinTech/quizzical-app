import { useEffect, useState } from 'react'
import MainPage from './components/MainPage'
import Questionpage from './components/QuestionPage'

function App() {
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [checked, setChecked] = useState(false)
  const [question, setQuestion] = useState([])

  const array = (arr) => arr.sort(() => Math.random() - 0.5)
 useEffect(() => {
 })
  return (
    <div className="container">
      
      {/* <MainPage /> */}
      <Questionpage />                                         
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import MainPage from './components/MainPage'
import { nanoid } from 'nanoid'
import Questionpage from './components/QuestionPage'

function App() {
  const [started, setStarted] = useState(false)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [checked, setChecked] = useState(false)
  const [question, setQuestion] = useState([])

  const array = (arr) => arr.sort(() => Math.random() - 0.5)
 useEffect(() => {
  async function question(){
    const res = await fetch('https://opentdb.com/api.php?amount=5')
    const data = await res.json()
    let q = []
    data.results.forEach(questions => {
      q.push({id:nanoid(), question:question.question, correct:question.answers, selected:null , checked:false, answers:array(...question.incorrect_answers, question.correct_answers)})
    })
    setQuestion(q)
  }
  question()
 } ,[count])

 const questionElement = questions ? questions.map(question => {
  return (
    <Questionpage
    key={question.id}
    q={question}
    id={question.id}
    />
  )
   }) : []

 const start =() => {
  setStarted(x => !x)
 }
  return (
    <div className="main_container">
      <div className='content_container'> {
        started?
        <div className='start=content'>
          {questionElement}
          <div className='end-content'>
            <button className='check'>Check answers</button>
      
          </div>
        </div>
        :
        <MainPage
        start = {start} 
        />

      }

      </div>

    </div>
  )
}

export default App

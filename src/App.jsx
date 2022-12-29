import { useEffect, useState } from 'react'
import MainPage from './components/MainPage'
import { nanoid } from 'nanoid'
import Questionpage from './components/QuestionPage'


function App() {
  const [started, setStarted] = useState(false)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [checked, setChecked] = useState(false)
  const [questions, setQuestions] = useState([])



  const shuffleArray = (item) => {
    return item.sort(() => Math.random() - 0.5)};

 useEffect(() => {
  async function getQuestion(){
    const res = await fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    const data = await res.json()
    // console.log(data)
    
    let q = []
    data.results.forEach(question => {
      q.push({id:nanoid(), question:question.question, correct:question.correct_answer, selected:null , checked:false, answers:shuffleArray([question.incorrect_answers, question.correct_answer])})
      // console.log(question)
    })
    setQuestions(q)
  }
  getQuestion()
 } ,[count])

 const handleCheck = () => {
  let selected = true;
  questions.forEach(question => {
    if(question.selected == null){
      selected = false;
      return
    }

  })
  if (selected){
    return
  }
  setQuestions(questions => questions.map(question =>{
    return {...question, checked:true}
  }))
  setChecked(true)
  let correct = 0
  questions.forEach(question => {
    if(question.correct === question.selected){
      correct += 1
    }
  })
  setCorrect(correct)
 }

 const handleClickAnswer = (id, answer) => {
  setQuestions(questions => questions.map(question => {
    return question.id === id ? {...question, selected:answer} : question
  }))
 }

 const handlePlayAgain = () => {
  setCount(count => count + 1)
  setChecked(false)
 }


 const questionElement = questions ? questions.map(question => {
  return (
    <Questionpage
    key={question.id}
    q={question}
    handleClickAnswer={handleClickAnswer}
    id={question.id}
    />
  )
   }) : []

 const start =() => {
  setStarted(prevState => !prevState)
 }
  return (
    <div className="main_container">
      <div className='content_container'> {
        started?
        <div className='start=content'>
          {questionElement}

          <div className='end-content'>
            {checked && <span className='score'>You scored {correct}/5 answers</span>}
            <button className='check'
            onClick={checked ? handlePlayAgain : handleCheck}
            >{checked ? "Play again" : "Check answer"}</button>
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

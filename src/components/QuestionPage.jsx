import React from "react";
import { nanoid } from "nanoid";

const Questionpage = (props) => {

    let answers = props.q.answers
    console.log(answers)
    const answersElement = answers.map(answer =>{
        let id = null

        if (props.q.checked){
            if(props.q.correct == answer){
                id = 'correct'
            }else if (props.q.selected === answer){
            id ='incorrect'
            } else {
            id ='not-selected'
            }
        }

        return (
            <button key={nanoid()} id={id} className={answer === props.q.selected ? 'answer selected' : 'answer'} >{answer}</button>
        )
        
    })

    return (
        <div className="question_container">
            <h3>{(props.q.question)}</h3>
           {answersElement}

        </div>
    )
} 



export default Questionpage

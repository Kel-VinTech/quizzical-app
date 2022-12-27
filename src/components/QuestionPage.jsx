import React from "react";
import { nanoid } from "nanoid";

const Questionpage = (props) => {
    let answers = props.q.answers
    const answerElements = answers.map(answer => {
        let id = null
        if (props.q.checked){
            if(props.q.correct === answer){
                id = 'correct'
            }
        }else if (props.q.selected === answer){
            id ='incorrect'
        } else {
            id ='not-selected'
        }
    })
    return (
        <div className="question_container">
           {answerElements}
        </div>
    )
}

export default Questionpage

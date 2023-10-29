import React from 'react'
import { cn } from '@bem-react/classname'
import "./Test.css"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Test = () => {
    const cnTest = cn("Test")
    const navigate = useNavigate()
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const dispatch = useDispatch()

    //@ts-ignore
    const state = useSelector((state) => state.test)
    const answers = [answer1, answer2,answer3, answer4]
    
    const AnswerSubmit = async () => {
        let score = 0;
        for(let i = 0; i < state.questions.length; i++) {
            if(answers[i].toLowerCase() === state.questions[i].answer.toLowerCase()){
                score += 1
            }
        } 
        const res = await fetch('http://localhost:3001/score', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: state.name, score: score})
          })
          const result = res.json().then((event) => 
          event.info === "Сохранено!" ?
          alert(`Вы набрали ${score} из ${state.questions.length}`)
          :
          console.log(event)
          )
          navigate('/tests')

    }

    //@ts-ignore
    const AnswerFuntion = (index , event) => {
        if( index === 0){
            setAnswer1(event.target.value)
            console.log(answer1)
        } else if( index === 1){
            setAnswer2(event.target.value)
        }
        else if( index === 2){
            setAnswer3(event.target.value)
        }
        else if( index === 3){
            setAnswer4(event.target.value)
        }
    }

  return (
    <div className={cnTest()}>
        <div className={cnTest("Container")}>
            <h1 className={cnTest("Title")}>{state.name}</h1>
            {
                //@ts-ignore
            state.questions.map((el, index) => 
                <div key={index} className={cnTest("Block")}>
                    <text>
                        {el.question}
                    </text>    
                    <input placeholder='Ответ' className={cnTest("Input")} onChange={(event) => AnswerFuntion(index, event)} />
                </div>
            )
            }
            <button onClick={() => AnswerSubmit()} className={cnTest("Button")}>Ответить</button>
        </div>
    </div>
  )
}

export default Test
import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./CreateTest.css"
import { useNavigate } from 'react-router-dom'

const CreateTest = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')

    const [quest1, setQuest1] = useState('')
    const [quest2, setQuest2] = useState('')
    const [quest3, setQuest3] = useState('')
    const [quest4, setQuest4] = useState('')

    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')

    const submitTest = async () => {
        console.log(answer1, answer2, answer3, answer4)
        const res = await fetch('http://localhost:3001/tests/new', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:name, questions:[{question:quest1,answer:answer1
            }, {
                question:quest2,answer:answer2  
            },
            {
                question:quest3,answer:answer3
            },
            {
                question:quest4,answer:answer4
            }
                ]})
          })
          const result = res.json().then((event) => alert(event.info))
        navigate('/tests')
    }

    const cnCreateTest = cn("CreateTest")
  return (
    <div className={cnCreateTest()}>
            <h1 className={cnCreateTest("H1")}>Создание теста</h1>
            <div className={cnCreateTest("Desc-Block")}>
                <p className={cnCreateTest("Desc")}>При создании теста нужно учитывать:
                </p>
                <p className={cnCreateTest("Desc")}>
                    1. Ответом на вопрос может быть или число, или одно слово (либо указывайте количество слов в ответе)
                </p>
                <p className={cnCreateTest("Desc")}>
                    2. Количество вопросов до 4 включительно
                </p>
                <p className={cnCreateTest("Desc")}>
                    3. Непереживайте мы скоро все пофиксим ;)
                </p>
            </div>
        <div className={cnCreateTest("Container")}>
            <input className={cnCreateTest("Title")} placeholder='Название теста:' onChange={(event) => setName(event.target.value)} />
            <div className={cnCreateTest("Quest")}>
                1 Вопрос:
                <label>
                        <input className={cnCreateTest("Input")} placeholder='Вопрос:' onChange={(event) => setQuest1(event.target.value)} />
                    </label>
                <input className={cnCreateTest("Input")} placeholder='Ответ:' onChange={(event) => setAnswer1(event.target.value)} />
            </div>
            <div className={cnCreateTest("Quest")}>
                2 Вопрос:
                <label>
                        <input className={cnCreateTest("Input")} placeholder='Вопрос:' onChange={(event) => setQuest2(event.target.value)} />
                    </label>
                <input className={cnCreateTest("Input")} placeholder='Ответ:' onChange={(event) => setAnswer2(event.target.value)} />
            </div>
            <div className={cnCreateTest("Quest")}>
                3 Вопрос:
                <label>
                        <input className={cnCreateTest("Input")} placeholder='Вопрос:' onChange={(event) => setQuest3(event.target.value)} />
                    </label>
                <input className={cnCreateTest("Input")} placeholder='Ответ:' onChange={(event) => setAnswer3(event.target.value)} />
            </div>
            <div className={cnCreateTest("Quest")}>
                4 Вопрос:
                <label>
                        <input className={cnCreateTest("Input")} placeholder='Вопрос:' onChange={(event) => setQuest4(event.target.value)} />
                    </label>
                <input className={cnCreateTest("Input")} placeholder='Ответ:' onChange={(event) => setAnswer4(event.target.value)} />
            </div>
            <button onClick={() => submitTest()} className={cnCreateTest("Button")}>Создать</button>
        </div>
    </div>
  )
}

export default CreateTest
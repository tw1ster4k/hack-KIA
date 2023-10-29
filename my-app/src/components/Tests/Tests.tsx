import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./Tests.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Tests = () => {
    const cnTests = cn("Tests")
    const dispatch = useDispatch()
    //@ts-ignore
    const [state, setState] = useState([{name:'', questions:[]}])
    /* const state = useSelector((state) => state.tests) */
    //@ts-ignore
 //   const scores = useSelector((state) => state.scores)
    const [scores, setScores] = useState([{name: "", score: 0}])

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/tests", {
                method:"GET",
                headers: {
                    'Content-Type':'application/json'
                  }
            });
            const data = await res.json()
            console.log(data)
            setState(data.tests)
            setScores(data.scores)
        })()
        
    },[])

    const OneTest = (name: string) => {
            //@ts-ignore
           const one = state.filter((el) => el.name === name)
           dispatch({type:"ONE_TEST" , payload:one[0]})
    }
  return (
    <div className={cnTests()} >
        <h1 className={cnTests("Title")}>Тесты</h1>
        <Link to="/tests/create">
            <button className={cnTests("Button")}>Создать новый тест</button>
        </Link>
        <div className={cnTests("Container")}>
            {
                //@ts-ignore
            state.map((el, index) => 
                <div key={index} className={cnTests("Test")} >
                    <h3 className={cnTests("Test-Title")}>{el.name}</h3>
                    <text>
                        {
                            //@ts-ignore
                        scores.filter((e) => e.name === el.name)[0] ?
                            //@ts-ignore
                        `Вы набрали ${scores.filter((elem) => elem.name === el.name)[0] ? scores.filter((elem) => elem.name === el.name)[0].score : 0} из ${el.questions.length}`
                        :
                        ""
                    }
                        </text>
                    <Link to={"/tests/" + index} >
                        <button onClick={() => OneTest(el.name)} className={cnTests("Test-Button")} >Пройти</button>
                    </Link>
                </div>
                )
                }
        </div>
    </div>
  )
}

export default Tests
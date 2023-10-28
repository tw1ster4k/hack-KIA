import React from 'react'
import { cn } from '@bem-react/classname'
import "./Tests.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Tests = () => {
    const cnTests = cn("Tests")
    const dispatch = useDispatch()
    //@ts-ignore
    const state = useSelector((state) => state.tests)

    const OneTest = (name: string) => {
            //@ts-ignore
           const one = state.filter((el) => el.name === name)
           dispatch({type:"ONE_TEST" , payload:one[0]})
    }
  return (
    <div className={cnTests()} >
        <h1 className={cnTests("Title")}>Тесты</h1>
        <div className={cnTests("Container")}>
            {
                //@ts-ignore
            state.map((el, index) => 
                <div key={index} className={cnTests("Test")} >
                    <h3 className={cnTests("Test-Title")}>{el.name}</h3>
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
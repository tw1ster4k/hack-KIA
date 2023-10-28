import React from 'react'
import { cn } from '@bem-react/classname'
import "./Cabinet.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cabinet = () => {
    const cnCabinet = cn("Cabinet")
    //@ts-ignore
    const state = useSelector((state) => state.user)

  return (
    <div className={cnCabinet()}>
        <div className={cnCabinet("Info")}>
            <div className={cnCabinet("Info-Item")}>
                <div className={cnCabinet("Average")}>
                        <text>Средный балл по пройденым тестам</text>
                </div>
                <h3>Имя Фамилия:</h3>
                <text>{state.name + " " + state.surname}</text>
            </div>
            <div className={cnCabinet("Info-Item")}>
                <h3>Номер телефона:</h3>
                <text>{state.number}</text>
            </div>
            <div className={cnCabinet("Info-Item")}>
                <h3>Почта:</h3>
                <text>{state.email}</text>
            </div>
        </div>
        <div className={cnCabinet("Navigation")}>
            <Link className={cnCabinet("Link")} to="/">Наша компания</Link>
            <Link className={cnCabinet("Link")} to="/">Мое обучение</Link>
            <Link className={cnCabinet("Link")} to="/">Мои тесты</Link>
            <Link className={cnCabinet("Link")} to="/">Мои результаты</Link>
            <Link className={cnCabinet("Link")} to="/">Мои обращения</Link>
        </div>
    </div>
  )
}

export default Cabinet
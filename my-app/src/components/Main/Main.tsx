import React from 'react'
import { cn } from '@bem-react/classname'
import './Main.css'
import Plumber from "../../imgs/plumber.png"
import { Link } from 'react-router-dom'


const Main = () => {
    const cnMain = cn("Main")
  return (
    <div className={cnMain()}>
        <div className={cnMain("Ad")}>
            <h1 className={cnMain("H1")}>Возможность получить новую профессию легко и просто</h1>
            <text className={cnMain("desc")}>персональная онлайн-статистика обучения,
автоматическая проверка заданий, 
наглядная динамика,
легкая управляемость процессом</text>
        </div>
        <img src={Plumber} className={cnMain("Img")}  />

        <div className={cnMain("Reg")}>
            <Link to="/reg">
                <button className={cnMain("Button")}>Регистрация нового портала</button>
            </Link>
            <text className={cnMain("Reg-Text")}>начни бесплатно уже сейчас</text>
        </div>
        
    </div>
  )
}

export default Main
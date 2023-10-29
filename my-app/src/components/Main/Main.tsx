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
        <div className={cnMain("PreFooter")}>
            <div className={cnMain("PreFooter-Block")}>
                <h3 className={cnMain("PreFooter-Title")}>50%</h3>
                <p className={cnMain("PreFooter-Desc")}>обучение в любое время</p>
            </div>
            <div className={cnMain("PreFooter-Block")}>
                <h3 className={cnMain("PreFooter-Title")}>24/7</h3>
                <p className={cnMain("PreFooter-Desc")}>постоянный доступ к системе</p>
            </div>
            <div className={cnMain("PreFooter-Block")}>
                <h3 className={cnMain("PreFooter-Title")}>17%</h3>
                <p className={cnMain("PreFooter-Desc")}>широкий выбор программ</p>
            </div>
        </div>
        </div>

  )
}

export default Main
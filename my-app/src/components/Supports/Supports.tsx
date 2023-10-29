import React from 'react'
import { cn } from '@bem-react/classname'
import "./Supports.css"

const Supports = () => {
    const cnSupports = cn("Supports")
  return (
    <div className={cnSupports()}>
        <h1 className={cnSupports("Title")}>Поддержка</h1>
        <div className={cnSupports("Form")}>
            <input className={cnSupports("Input")} placeholder='Имя Фамилия' />
            <input className={cnSupports("Input")} placeholder='Email' />
            <input className={cnSupports("Input")} placeholder='Вопрос' />
            <button onClick={() => alert("Спасибо за вопрос! С вами в ближайшее время свяжутся ;)")} className={cnSupports("Button")}>Отправить</button>
        </div>
    </div>
  )
}

export default Supports
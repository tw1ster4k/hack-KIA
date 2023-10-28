import React from 'react'
import { cn } from '@bem-react/classname'
import "./Registration.css"

const Registration = () => {
    const cnRegister = cn("Register")
  return (
    <div className={cnRegister()}>
        <div className={cnRegister("Container")}>
            <h1 className={cnRegister("H1")}>ПрофТестиум</h1>
            <div className={cnRegister("Form")}>
                <text className={cnRegister("Title")}>Регистрация нового портала/школы</text>
                <input className={cnRegister("Input")} placeholder='ФИО' />
                <input className={cnRegister("Input")} placeholder='Телефон' />
                <input className={cnRegister("Input")} placeholder='Email' />
                <input className={cnRegister("Input")} placeholder='ИНН организации' />
                <input className={cnRegister("Input")} placeholder='Адрес организации' />
                <button className={cnRegister("Button")} >Продолжить</button>
            </div>
        </div>
    </div>
  )
}

export default Registration
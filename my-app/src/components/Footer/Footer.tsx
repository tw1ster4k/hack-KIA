import React from 'react'
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from "../../imgs/Logo.png"

const Footer = () => {
    const cnFooter = cn("Footer")
  return (
    <footer className={cnFooter()} >
        <img src={Logo} className={cnFooter("Title")} />
        <div className={cnFooter("Nav")}>
        <Link to={"/"} className={cnFooter("Link")}>Возможности</Link>
        <Link to={"/"} className={cnFooter("Link")}>Тарифы</Link>
        <Link to={"/intro"} className={cnFooter("Link")}>Внедрение</Link>
        <Link to={"/"} className={cnFooter("Link")}>Поддержка</Link>
        </div>
        <div className={cnFooter("Form")}>
            <text>оставьте заявку или вопрос</text>
            <input placeholder='Имя' />
            <input placeholder='Фамилия' />
            <input placeholder='Заявка или вопрос' />
            <button className={cnFooter("Button")}>Отправить</button>
        </div>
        <div className={cnFooter("Other")}>
            <Link to={"/"} className={cnFooter("Link")}>Помощь</Link>
            <Link to={"/"} className={cnFooter("Link")}>Вопросы и ответы</Link>
            <Link to={"/"} className={cnFooter("Link")}>Обучение</Link>
            <Link to={"/"} className={cnFooter("Link")}>Материалы по охране труда</Link>
            <Link to={"/"} className={cnFooter("Link")}>Личный кабинет</Link>
        </div>
        <button className={cnFooter("Button")} style={{marginTop:50, width:300, height:50, marginLeft:200, marginBottom:20}}>Обратный звонок</button>
        <text className={cnFooter("Link")} style={{fontSize:32, fontWeight:700, marginTop:50, marginLeft:200, marginBottom:20,}}>Политика конфиденциальности</text>
    </footer>
  )
}

export default Footer
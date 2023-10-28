import React from 'react'
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    const cnHeader = cn("Header")
  return (
    <div className={cnHeader()}>
        <text className={cnHeader("Title")}>ПрофТестиум</text>
        <Link to={"/"} className={cnHeader("Link")}>Возможности</Link>
        <Link to={"/"} className={cnHeader("Link")}>Тарифы</Link>
        <Link to={"/"} className={cnHeader("Link")}>Внедрение</Link>
        <Link to={"/"} className={cnHeader("Link")}>Поддержка</Link>
        <Link to={"/reg"}><button className={cnHeader("Reg")}>Зарегистрироваться</button></Link>
        <Link to={"/login"}><button className={cnHeader("LogIn")}>Вход</button></Link>
    </div>
  )
}

export default Header
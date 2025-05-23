import React from 'react'
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useSelector } from 'react-redux'
import Logo from "../../imgs/Logo.png"

const Header = () => {
  //@ts-ignore
  const state = useSelector((state) => state.user) 
    const cnHeader = cn("Header")
    console.log(state.login)
    const navItems = state.login ? [{link:"/lk", name:"Личный кабинет"}] : [{link:"/login", name:"Вход"}]
  return (
    <div className={cnHeader()}>
        <img className={cnHeader("Title")} src={Logo} />
        <Link to={"/"} className={cnHeader("Link")}>Возможности</Link>
        <Link to={"/tarifs"} className={cnHeader("Link")}>Тарифы</Link>
        <Link to={"/intro"} className={cnHeader("Link")}>Внедрение</Link>
        <Link to={"/reviews"} className={cnHeader("Link")}>Отзывы</Link>
        <Link to={"/tests"} className={cnHeader("Link")}>Тесты</Link>
        <Link to={"/supports"} className={cnHeader("Link")}>Поддержка</Link>
        { 
        navItems.map((el, index)  =>
          <Link key={index} to={el.link}><button className={cnHeader(el.link === "/login" ? "LogIn" : "Reg")}>{el.name}</button></Link>
          
        )
        }
    </div>
  )
}

export default Header
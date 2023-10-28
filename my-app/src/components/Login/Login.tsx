import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    //@ts-ignore
    const state = useSelector((state) => state.humans)
    //@ts-ignore
    const stat = useSelector((state) => state.user)

    console.log(stat)

    
    const handlerSubmitUser = () =>  {
        for(let i = 0; i < state.length; i++){
            if(login === state[i].login && password === state[i].password) {
                dispatch({type: "LOG_USER", payload:{login:login, password:password, role:state[i].role}})
                 navigate('/')
                 alert("Вы вошли!")
                 return null;
            }else{
                alert("Неправильный пароль или логин")
            }
        }
    }

    const cnLogin = cn("Login")
  return (
    <div className={cnLogin()}>
        <div className={cnLogin("Form")} >
            <h1>ПрофТестиум</h1>
            <input placeholder='Login' onChange={(event) => setLogin(event.target.value)} className={cnLogin("Input")} />
            <input placeholder='Password' onChange={(event) => setPassword(event.target.value)} type='password' className={cnLogin("Input")} />
            <button onClick={handlerSubmitUser} className={cnLogin("Button")}>Войти</button>
        </div>
    </div>
  )
}

export default Login
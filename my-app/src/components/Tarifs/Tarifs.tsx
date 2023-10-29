import React from 'react'
import { cn } from '@bem-react/classname'
import "./Tarifs.css"
import { Link } from 'react-router-dom'

const Tarifs = () => {
    const cnTarifs = cn("Tarifs")
  return (
    <div className={cnTarifs()}>
        <h1 className={cnTarifs("H1")}>Тарифы</h1>
        <div className={cnTarifs("Content")}>
            <div className={cnTarifs("Tarif")}>
            <div className={cnTarifs("Tarif-Header")} style={{background: "#20BE56"}}>
                        <h3>Бесплатный</h3>
                        <p>Пробный период 0₽</p>
                    </div>
                    <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around'}}>
                       <p>
                        1. Кол-во участников:15
                        </p>
                        <p>
                        2. Один HR-Менеджер
                        </p>
                        <p>
                        3. Доступ к результатам тестирований
                        </p>
                        <p>
                        4. Один Админ на все преприятие
                        </p> 
                    </div>
                    <Link to="/reg">
                    <button className={cnTarifs("Link")} style={{border:"1px solid #20BE56", color:"#20BE56"}}>Приобрести</button>
                    </Link>
            </div>
            <div className={cnTarifs("Tarif")}>
                    <div className={cnTarifs("Tarif-Header")} style={{background: '#1B24F7'}}>
                        <h3>Малый бизнес</h3>
                        <p>5000₽ в месяц</p>
                    </div>
                    <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around'}}>
                       <p>
                        1. Кол-во участников:30
                        </p>
                        <p>
                        2. Пять HR-Менеджеров
                        </p>
                        <p>
                        3. Доступ к результатам тестирований + к ответам после тестирования
                        </p>
                        <p>
                        4. Три Админа на все преприятие
                        </p> 
                    </div>
                    <Link to="/reg">
                    <button className={cnTarifs("Link")} style={{border:"1px solid #1B24F7", color:"#1B24F7"}}>Приобрести</button>
                    </Link>
            </div>
            <div className={cnTarifs("Tarif")}>
            <div className={cnTarifs("Tarif-Header")} style={{background: '#F08100'}}>
                        <h3>Преприятие</h3>
                        <p>10000₽ в месяц</p>
                    </div>
                    <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around'}}>
                       <p>
                        1. Кол-во участников:100
                        </p>
                        <p>
                        2. Десять HR-Менеджеров
                        </p>
                        <p>
                        3. Доступ к результатам тестирований + доступ к ответам + доступ к vr-тестированию
                        </p>
                        <p>
                        4. Пять Админов на все преприятие
                        </p> 
                    </div>
                    <Link to="/reg">
                    <button className={cnTarifs("Link")} style={{border:"1px solid #F08100", color:"#F08100"}}>Приобрести</button>
                    </Link>
            </div>
            <div className={cnTarifs("Tarif")}>
            <div className={cnTarifs("Tarif-Header")} style={{background: '#DC1010'}}>
                        <h3>Корпорация</h3>
                        <p>25000₽ в месяц</p>
                    </div>
                    <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around'}}>
                       <p>
                        1. Кол-во участников:Неограничено
                        </p>
                        <p>
                        2. HR-Менеджеров неограниченое кол-во
                        </p>
                        <p>
                        3. Доступ ко всему пакету тестирований и заданий
                        </p>
                        <p>
                        4. Десять Админов на все преприятие
                        </p> 
                    </div>
                    <Link to="/reg">
                    <button className={cnTarifs("Link")} style={{border:"1px solid #dc1010", color:"#dc1010"}}>Приобрести</button>
                    </Link>
                    
                </div>
        </div>
    </div>
  )
}

export default Tarifs
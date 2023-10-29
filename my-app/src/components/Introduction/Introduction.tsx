import React from 'react'
import { cn } from '@bem-react/classname'
import "./Introduction.css"
import Image from "../../imgs/VR.png"

const Introduction = () => {
    const cnIntro = cn("Intro")
  return (
    <div className={cnIntro()}>
        <div className={cnIntro("Content")}> 
            <h1 className={cnIntro("Addition")}>Текст с доп. услугами</h1>
        </div>
        <div className={cnIntro("VR")}>
                <img src={Image} className={cnIntro("Image")} />
                <button className={cnIntro("Button")}>Приобретение vr-оборудования</button>
                <p className={cnIntro("Text")}>VR в обучении позволяет повысить эффективность подачи материала — 
можно поместить человека в такие ситуации, которые сложно 
или дорого смоделировать в реальности; 
проанализировать, как человек будет действовать в нестандартной ситуации.</p>
        </div>
    </div>
  )
}

export default Introduction
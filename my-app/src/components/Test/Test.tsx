import React from 'react'
import { cn } from '@bem-react/classname'
import "./Test.css"
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Test = () => {
    const [aswer1, setAnswer1] = useState('')
    const [aswer2, setAnswer2] = useState('')
    const [aswer3, setAnswer3] = useState('')
    const [aswer4, setAnswer4] = useState('')
    //@ts-ignore
    const state = useSelector((state) => state.test)
  return (
    <div>
        {state.name}
    </div>
  )
}

export default Test
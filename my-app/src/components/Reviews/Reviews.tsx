import React, {useState, useEffect} from 'react'
import { cn } from '@bem-react/classname'
import "./Reviews.css"

const Reviews = () => {
    const cnReviews = cn("Reviews")
    const [reviews, setReviews] = useState([{name:"", description:""}])
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const ReviewsSubmit = async () => {
        const res = await fetch('http://localhost:3001/reviews/new', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:name, description:desc})
          })
          const result = res.json().then((event) => alert(event.info))
    
          window.location.reload()
    }

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/reviews", {
                method:"GET",
                headers: {
                    'Content-Type':'application/json'
                  }
            });
            const data = await res.json()
            console.log(data)
            setReviews(data.reviews)
        })()
        
    },[])

  return (
    <div className={cnReviews()}>
        <h1 className={cnReviews("H1")}>Отзывы</h1>
        <div className={cnReviews("Content")}>
            {
                reviews.map((el, index) => 
            <div key={index} className={cnReviews("Block")}>
                <h3 className={cnReviews("Name")}>{el.name}</h3>
                <p className={cnReviews("Desc")} >{el.description}</p>
            </div>
                    )
                }
        </div>
        <div className={cnReviews("Form")}>
                <h3 className={cnReviews("Form-Title")}>Оставить отзыв:</h3>
                <input onChange={(event) => setName(event.target.value)} className={cnReviews("Input")} placeholder='Имя Фамилия' />
                <input onChange={(event) => setDesc(event.target.value)} className={cnReviews("Input")} placeholder='Отзыв' />
                <button onClick={() => ReviewsSubmit()} className={cnReviews("Button")}>Отправить</button>
        </div>
    </div>
  )
}

export default Reviews
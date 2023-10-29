export const initState = {
    user:{},
    humans:[{
        login:"1",
        password:"qwerty123",
        role:"user",
        name:"Антон",
        surname:"Чехов",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"2",
        password:"qwerty1234",
        role:"user",
        name:"Алексей",
        surname:"Грибов",
        number:"88005353535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"3",
        password:"qwerty12345",
        role:"user",
        name:"Илья",
        surname:"Шамов",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"4",
        password:"qwerty123456",
        role:"user",
        name:"Дамир",
        surname:"Черников",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"5",
        password:"qwerty1234567",
        role:"user",
        name:"Андрей",
        surname:"Петров",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"6",
        password:"qwerty12345678",
        role:"HR",
        name:"",
        surname:"Чехов",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"7",
        password:"qwerty123456789",
        role:"HR",
        name:"Анатолий",
        surname:"Добряков",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {
        login:"8",
        password:"qwerty1234567890",
        role:"HR",
        name:"Николай",
        surname:"Грибоедов",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"
    },
    {   
        login:"9",
        password:"qwerty12345678901",
        role:"admin",
        name:"Павел",
        surname:"Балмаханов",
        number:"888005553535",
        email:"mail@mail.ru",
        organization:"МБОУ ССОШ №1"   
    }   
],

tests:[
    {name:"Математические вопросы",
    questions:[
        {question:"2+2",
            answer:"4"
        },
        {question:"2 + 2 * 2",
        answer:"6"
        },
        {question:"x-5 = 0. Найдите x ",
        answer:"5"
        },
        {question:"x * (x - 10) = 0. В ответе запишите меньший из корней",
        answer:"0"
        },
    ],
    },
    {name:"Столицы",
    questions:[
        {question:"Столица России",
            answer:"Москва"
        },
        {question:"Столица Франции",
        answer:"Париж"
        },
        {question:"Столица Италии",
        answer:"Рим"
        },
        {question:"Столица Бразилии",
        answer:"Бразилиа"
        },
    ],
    },
    {name:"Алгебра",
    questions:[
        {question:"2x + 4 = 0. Чему равен x?",
            answer:"-2"
        },
        {question:"ctg x = 1. Чему равен tg x?",
        answer:"1"
        },
        {question:"7x + 5x + 4x + 3x + 2x + x = 44. Чему равен x?",
        answer:"2"
        },
        {question:"7x * 2 = 28. Найдите х.",
        answer:"2"
        },
    ],
    }
],

scores:[
],

test:{
    
}


}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case "LOG_USER" :
            return {...state, user: action.payload}
        case "ONE_TEST" :
            return {...state, test: action.payload}
        case "ADD_SCORE" :
             const newScore = action.payload 
             const scores = [...state.scores, newScore];
             console.log(scores)
             return {...state, scores: scores}  
        default :
        return state;
    }
}
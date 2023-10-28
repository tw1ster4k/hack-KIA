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

}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case "LOG_USER" :
            return {...state, user: action.payload}
        default :
        return state;
    }
}
export const initState = {
    user:{},
    humans:[{
        login:"1",
        password:"qwerty123",
        role:"user"
    }],

}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case "LOG_USER" :
            return {...state, user: action.payload}
        default :
        return state;
    }
}
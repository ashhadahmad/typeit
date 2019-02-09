const initstate = {
    authError: false,
}

const authReducer = (state = initstate, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: true,
                authErrorMessage: action.err.message

            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: false
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success')
            return state;
        
        case 'SIGNUP_SUCCESS': 
            console.log('Signup Success')
            return {
                ...state,
                authError: false
            }

            case 'SIGNUP_ERROR': 
            console.log('Signup Error')
            return {
                ...state,
                authError: true,
                authErrorMessage: action.err.message
            }

        default : 
            return state;
    }
}

export default authReducer
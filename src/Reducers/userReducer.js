let defaultState = {currentUser: (localStorage.getItem("user") === undefined ? null : JSON.parse(localStorage.getItem("user"))), token: localStorage.getItem("token"), error: null}

export default function userReducer(state = defaultState, action){
    switch (action.type){
        case 'SET_USER':
            console.log(state)
            return state
        default:
            return state
    }
}
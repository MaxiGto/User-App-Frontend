import { types } from "../types/types";

const initialState = {}

export const userReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.userLoaded:
            return{
                ...state,
                id: action.payload.id,
                avatar: action.payload.avatar,
                age: action.payload.age,
                email: action.payload.email,
                name: action.payload.name,
                role: action.payload.role,
                surname: action.payload.surname
            }

        case types.userLogout:
            return initialState;
    
        default:
            return state;
    }


}
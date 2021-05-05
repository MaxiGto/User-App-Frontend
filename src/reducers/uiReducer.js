import { types } from "../types/types";

const initialState = {
    validEmail: false
}

export const uiReducer = ( state = initialState, action) => {

    switch (action.type) {
        case types.uiEmailVerified:
            return{
                ...state,
                validEmail: true
            }

            case types.uiEmailNotVerified:
                return{
                    ...state,
                    validEmail: false
                }
            
    
        default:
            return state;
    }

}
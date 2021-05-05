import Swal from "sweetalert2";

import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types";

// Authenticates the user and saves JWT in local storage 

export const startLogin = (email, password) => {
    return async( dispatch ) => {

        const resp = await fetchWithoutToken( 'authenticate', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                id: body.id,
                name: body.name
            }) );

        } else {
            Swal.fire('Error', 'Invalid email or password', 'error');
        }
    };
};

// Automatically logs in if the user is authenticated after refreshing. Also renews JWT

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchWithToken( 'renew' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                id: body.id,
                name: body.name
            }) );

        } else {
            dispatch( checkingFinished() );
        }

    }
}


// contains the action for the authReducer
 

const checkingFinished = () => ({
    type: types.authCheckingFinished
});

// contains the action for the authReducer
 

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


 // clears local storage and dispatches login action
 

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );

    }
}


// contains the action for the authReducer
 

const logout = () => ({
    type: types.authLogout
});

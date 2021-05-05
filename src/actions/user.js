import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";


/**@description Fetches user info */

export const userStartLoading = () => {
    return async(dispatch) => {

        try {

            const resp = await fetchWithToken('users/me');
            const body = await resp.json();

            dispatch( userLoaded( body ) );
            
        } catch (error) {
            console.log(error);
        }

    }
}

/**
 * @param {user} - the user
 * @returns {object} - contains the action for the userReducer
 */

const userLoaded = (user) => ({
        type: types.userLoaded,
        payload: user
});

/**
 * @returns {object} - contains the action for the userReducer
 */

export const userLogout = () => ({
    type: types.userLogout
})

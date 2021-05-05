const baseUrl = process.env.REACT_APP_API_URL; // .env file

export const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${baseUrl}/${endpoint}`;

    if( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    };

};

export const fetchWithToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || ''; // sets token variable with an empty string if JWT does not exist in local storage.

    if( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        } );
    }


}
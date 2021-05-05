import React from 'react';

import './loading.css';

export const LoadingScreen = () => {
    return (
        <div className="loading-background">
            <div className="loading-container">
                <i className="fab fa-optin-monster"></i>
                <p>Please Wait...</p>
            </div>
        </div>
    )
}

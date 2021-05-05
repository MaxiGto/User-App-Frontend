import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';

import { LoginScreen } from '../components/auth/LoginScreen';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { UserScreen } from '../components/user/UserScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const { checking, id } = useSelector(state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() ); 

    }, [dispatch]);

    if( checking ){
        return <LoadingScreen />
    }

    return (
            <Router>
                <div>
                    <Switch>
                        <PublicRoute 
                            exact
                            path="/login"
                            component={ LoginScreen }
                            isAuthenticated= { !!id }  // True if the user is authenticated, false if not.
                        />

                        <PrivateRoute 
                            exact
                            path="/user-info"
                            component={ UserScreen }
                            isAuthenticated= { !!id } // True if the user is authenticated, false if not.
                        />

                        <Redirect to="/login"/>

                    </Switch>
                </div>
            </Router>
    )
}

import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    user: userReducer
});
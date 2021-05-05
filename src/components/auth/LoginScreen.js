import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import validator from 'validator';


import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { emailVerified } from '../../actions/ui';

import '../../styles.css';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { validEmail } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    /**@description Starts login process  when "Login" button is pressed */

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch( startLogin(email, password) );
    }

    /**@description Validates email when "Next" button is pressed */

    const handleNext = (e) => {
        e.preventDefault();

        if( validator.isEmail( email ) ){
            dispatch( emailVerified() );
        } else {
            Swal.fire('Error', 'Please enter a valid email', 'error');
        }

        
    }

    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-content">
                        <i className="fas fa-users"></i>
                        <h3 className="login-title">Log in to your account</h3>
                        <form onSubmit={ handleLogin }>
                            <div>
                                <input 
                                    type="text"
                                    placeholder="Email"
                                    className="login-input"
                                    name="email"
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            {   ( validEmail ) && // Shows password input only when the email entered is valid
                                <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="login-input animate__animated animate__fadeIn"
                                    name="password"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            }
                            {   ( !validEmail ) && // Hides Next button when the email entered is valid
                                <div>
                                <input 
                                    type="button"
                                    value="Next"
                                    className="btn-login" 
                                    onClick={ handleNext }
                                />
                                </div>
                            }
                            {   ( validEmail ) && // Shows Login button only when the email entered is valid
                                <div>
                                <input 
                                    type="submit"
                                    value="Login"
                                    className="btn-login animate__animated animate__fadeIn"
                                />
                                </div>
                            }
                        </form>
                </div>
            </div>
        </div>
    )
}
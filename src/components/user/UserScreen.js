import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userStartLoading } from '../../actions/user';

import { Navbar } from '../ui/Navbar';

import '../../styles.css';
import './user.css';

export const UserScreen = () => {

    const dispatch = useDispatch();
    const { id, avatar, age, email, name, role, surname  } = useSelector(state => state.user)
    
    useEffect(() => {

        dispatch( userStartLoading() ); 
        
    }, [dispatch])
    
    

    return (
        <div className="user-background">
            <Navbar />

                <div className="user-container">
                    <img
                        className="user-avatar"
                        src={ avatar } 
                        alt="avatar"
                    />

                    <div className="content">
                        <span>User ID</span>
                        <p>{id} </p>
                        <hr/>
                        <span>Name</span>
                        <p>{ name } { surname } </p>
                        <hr/>
                        <span>Email</span>
                        <p>{ email } </p>
                        <hr/>
                        <span>Age</span>
                        <p>{ age } </p>
                        <hr/>
                        <span>Role</span>
                        <p>{ role } </p>
                    </div>
                </div>
        </div>
    )
}

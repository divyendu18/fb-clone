import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state, dispatch]=useStateValue();


    const signIn=() =>{
        auth
            .signInWithPopup(provider)
            .then((result) => {
                
                dispatch({
                    type:actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) =>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREoW4yDx4gnD6oIBVEK230BqF7Oig0yR6XDw&usqp=CAU" alt=""/>          
            </div>

            <Button type="submit" onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login

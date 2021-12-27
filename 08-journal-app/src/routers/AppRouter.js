import React, { useEffect, useState } from 'react';
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {  startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    //El efecto esta pendiente de cualquier cambio que se ejecute en la autenticacion
    useEffect(() => {
       firebase.auth().onAuthStateChanged( async(user) => {
            if( user?.uid){
                dispatch( login(user.uid, user.displayName) );
                setisLoggedIn(true);
                dispatch( startLoadingNotes(user.uid) );

            }else{
                setisLoggedIn(false);
            }
            setCheking(false);
        })
    }, [dispatch, setCheking, setisLoggedIn])

    if( checking ){ //Esto espera que haya una respuesta de firebase
                    //una vez tenga una repuesta se quita esta pantalla
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router >
            <div>
                <Switch>
                    <PrivateRoute 
                        exact 
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen} 
                    /> 

                    <PublicRoute 
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div> 
        </Router>
    )
}

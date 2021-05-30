import React, { useState,useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout:() => {},
    onLogin:()=> {}
});

export const AutoContextProvider = (props) =>{
    const [isLoggedIn,setIsLoggeIn]=useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggeIn(true);
        }
    }, []);

    const logoutHandler = () =>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggeIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggeIn(true);
    }

    return (<AuthContext.Provider value={
        {
            isLoggedIn: isLoggedIn,
            onLogout:logoutHandler,
            onLogin:loginHandler
        }
    }>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;
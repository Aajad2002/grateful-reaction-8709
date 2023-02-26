import React, { useState } from 'react'
import { createContext } from 'react';
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const [username,setUserName]=useState("");
    const [isAuth,setIsAuth]=useState(false);
    console.log(isAuth,username)
  return (
    <AuthContext.Provider value={{username,setUserName,setIsAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
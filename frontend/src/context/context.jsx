import { Children, createContext, useContext, useState } from 'react';

export const UserContext = createContext()

export const AuthContext = ({children}) =>{
    
    const [user, setUser] = useState("kjjjsdlf");
    const [token, setToken] = useState("kjjjsdlf");
  return (
    <UserContext.Provider value={{user,token, setUser, setToken}}>
      {children}
    </UserContext.Provider>
  )
}


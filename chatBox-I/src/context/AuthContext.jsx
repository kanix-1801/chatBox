import { createContext, useContext, useState } from "react";

//create context
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
    const [currentUser , setCurrentUser] = useState('')

    const value ={
        currentUser,
        setCurrentUser
    }
    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)

// export const UserAuth = () =>{
//     return useContext(AuthContext);
// } 
}
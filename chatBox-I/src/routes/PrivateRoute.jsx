import { useState } from "react"

export const PrivateRoute = ({children}) =>{
    const [userLoged , setUserLoged] = useState(false);

    if(userLoged){
    return(<>
    {children}
    </>)
    }
}


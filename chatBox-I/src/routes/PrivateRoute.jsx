import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
    const currentUser = false;
    if(!currentUser){
        return(<Navigate to="/" replace={true} />)
    }
    return children;
}


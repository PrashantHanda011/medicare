import React, {  useContext,useState,useEffect } from "react";
import { auth } from "../firebase";


const authContext = React.createContext();

export const useAuth = () => {
  return useContext(authContext);
};


export const AuthProvider = ({children}) => {
   
    const [currentUser, setcurrentUser] = useState()
  
    function signup(email,password){
        auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setcurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    };
    
    
    return  <authContext.Provider value={value}>
                 {children}
            </authContext.Provider>;
};
export default AuthProvider;

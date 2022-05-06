import {createContext,useContext,useState} from "react"
const AuthContext = createContext();

function AuthContextProvider({children}){
    const [isLoggedIn,setLogIn] = useState(false);
    return(
    <AuthContext.Provider value={{isLoggedIn,setLogIn}}>
        {children}
    </AuthContext.Provider>
    )
}
const useAuth = ()=> useContext(AuthContext);

export {AuthContextProvider,useAuth}
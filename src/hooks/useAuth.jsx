import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={}>
                {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return UserContext(UserContext)
}
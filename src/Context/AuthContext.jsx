import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
    let [isLogin, setLogin] = useState(null);
    useEffect(() => {
        let storedLogin = localStorage.getItem('User');
        if (storedLogin) {
            setLogin(JSON.parse(storedLogin));
        }
    }, []);
    let logout = () => {
        setLogin(null);
        localStorage.removeItem('User');
    };

    return (
        <AuthContext.Provider value={{ isLogin, logout ,setLogin}}>
            {children}
        </AuthContext.Provider>
    );
}
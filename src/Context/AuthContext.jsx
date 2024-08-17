import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
    let [isLogin, setLogin] = useState(null);
    useEffect(() => {
        let storedLogin = localStorage.getItem('isLogin');
        if (storedLogin) {
            setLogin(JSON.parse(storedLogin));
        }
    }, []);

    let login = (newUser) => {
        setLogin(newUser);
        localStorage.setItem('isLogin', JSON.stringify(newUser));
    };

    let logout = () => {
        setLogin(null);
        localStorage.removeItem('isLogin');
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
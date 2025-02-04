import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

    useEffect(() => {
        const storedUser = localStorage.getItem("userName");
        if (storedUser) setUserName(storedUser);
    }, []);

    const login = (name) => {
        localStorage.setItem("userName", name);
        setUserName(name);
    };

    const logout = () => {
        localStorage.removeItem("userName");
        setUserName("");
    };

    return (
        <UserContext.Provider value={{ userName, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

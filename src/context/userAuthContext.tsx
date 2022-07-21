import { createContext, useContext, useEffect, useState } from "react";

export type AuthContextType = {
    user: any
    logIn: (email: string, password: string) => void;
};




const userAuthContext = createContext<AuthContextType>({ user: null, logIn: () => null });

type Props = {
    children?: React.ReactNode;
};

export function UserAuthContextProvider({ children }: Props) {

    const [user, setUser] = useState();

    function logIn(email: string, password: string) {
        console.log(email, password);

    }

    return (
        <userAuthContext.Provider value={{ user, logIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext) as AuthContextType;
}


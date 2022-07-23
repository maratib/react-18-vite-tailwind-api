import React, { FC, useContext, useState } from "react";
import api from "../api";

interface IAuthContext {
  loggedIn: boolean;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

const defaultState: IAuthContext = {
  loggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

export const AuthContext = React.createContext<IAuthContext>(defaultState);

export const AuthProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState(defaultState.loggedIn);

  const logIn = async (username: string, password: string) => {
    console.log(username, password);

    const loginResponse = await api.auth(username, password);
    setLoggedIn(loginResponse);
    return loginResponse;
  };
  const logOut = () => {
    console.log("Logout Called");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

import React, { FC, useContext, useEffect, useState } from "react";
import { getItemAsBoolean, setItem } from "../helper/localStorage";

interface IThemeContext {
  dark: boolean;
  toggleDark: () => void;
}

const defaultState: IThemeContext = {
  dark: getItemAsBoolean("dark"),
  toggleDark: () => {},
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState(defaultState.dark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDark = () => {
    const mode = !dark;
    setDark(mode);
    setItem("dark", mode.toString());
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

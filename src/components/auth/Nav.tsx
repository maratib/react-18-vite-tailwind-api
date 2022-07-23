import React, { FC } from "react";
import { useTheme } from "@/context/ThemContext";
import { useAuth } from "../../context/AuthContext";

type Props = {
  name?: string;
};

export const Nav: FC<Props> = ({ name }) => {
  const { dark, toggleDark } = useTheme();
  const { logOut } = useAuth();
  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toggleDark();
  };
  const handleLogout = (e: { preventDefault: () => void }) => {
    logOut();
  };
  return (
    <div>
      <h1>Nav</h1>

      <div>
        <h1 onClick={handleOnClick}>{dark ? "🌙" : "🌞"}</h1>
        <h3 onClick={handleLogout}>Logout</h3>
      </div>
    </div>
  );
};

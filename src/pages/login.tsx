import React, { FC, useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { ThemeContext, useTheme } from "../context/ThemContext";

type Props = {
  name?: string;
};

export const Login: FC<Props> = ({ name }) => {
  const { logIn } = useAuth();
  const handleSubmit = async (event: any) => {
    event?.preventDefault();

    const res = await logIn("moon101@gmail.com", "Sam@12345");
    console.log("Response : ", res);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label className="dark:text-white">
          Name:
          <input type="text" name="username" className="dark:text-black" />
        </label>
        <label className="dark:text-white">
          Password:
          <input type="password" name="password" className="dark:text-black" />
        </label>
        <input type="submit" value="Submit" className="dark:text-white" />
      </form>
    </div>
  );
};

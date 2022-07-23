import { setItem } from "../helper/localStorage";
import { axiosClient } from "./axiosClient";

export default {
  async auth(username: string, password: string): Promise<boolean> {
    const res = await axiosClient.post(
      "/auth/login",
      JSON.stringify({ username, password })
    );

    if (res.status == 201) {
      const token = res.data.accessToken;
      console.log("Token Received: ", token);

      setItem("token", token);
      return true;
    }
    return false;
  },
};

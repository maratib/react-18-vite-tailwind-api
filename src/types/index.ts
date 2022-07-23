export const history = {
  navigate: <any>null,
  location: <any>null,
};

export type AuthContextType = {
  user: any;
  logIn: (email: string, password: string) => void;
};

// export type myType = {
//     name: string;
//     location: string;
// };

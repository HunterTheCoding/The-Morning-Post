import { useContext } from "react";
import { AuthContext, AuthContextProps } from "../Auth/Provider";
const Context = () : AuthContextProps => {
  const all = useContext(AuthContext) as AuthContextProps;
  return all;
};

export default Context;
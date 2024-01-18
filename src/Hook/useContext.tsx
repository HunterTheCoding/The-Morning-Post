import { useContext } from "react";
import { AuthContext } from "../Auth/Provider";
const Context = () => {
  const all = useContext(AuthContext);
  return all;
};

export default Context;
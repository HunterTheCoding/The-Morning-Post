import { useContext } from "react";
import { AuthContext, AuthContextProps } from "../Auth/Provider";
const Context = () : AuthContextProps => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};

export default Context;

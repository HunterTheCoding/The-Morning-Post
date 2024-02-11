import { useContext } from "react";
import { AuthContext } from "../Auth/Provider";


const useAuth = () => {
    const authcontext = useContext(AuthContext)
    return authcontext
};

export default useAuth;
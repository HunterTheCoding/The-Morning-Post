import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Context from "../../Hook/useContext"
import toast from "react-hot-toast";
const SocialLogin = () => {
    const { signInWithGoogle } = Context();
    // const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        if (signInWithGoogle) {
            signInWithGoogle()
              .then(() => {
           navigate('/');
  
              })
              .catch((error: Error) => {
                // Handle any potential errors
                toast.error(error.message)
               
              });
          }
    }

    return (
        <div className="p-8 w-full">
            <div className="divider w-1/2 ml-20"></div>
            <div className="">
                <button onClick={handleGoogleSignIn} className="btn w-full bg-blue-800 hover:bg-blue-500 btn-outline  ">
                    <FaGoogle className="mr-2 "></FaGoogle>
                Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
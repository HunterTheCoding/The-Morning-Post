import { FaFacebook } from "react-icons/fa";
import Context from "../../Hook/useContext";

const FaceBookLogin = () => {
    const { SignInWithFacebook } = Context(); // This line needs correction

    const handleFaceBookSignIn = () => {
        if (SignInWithFacebook) {
            SignInWithFacebook().then((result) => { // Ensure SignInWithFacebook is defined before accessing then
                console.log(result.user);
            }).catch((error: Error) => {
                console.error(error.message);
            });
        }
    }

    return (
        <div className="p-8 w-full">
            <div className="divider w-1/2 ml-20"></div>
            <div className="">
                <button onClick={handleFaceBookSignIn} className="btn w-full bg-blue-800 hover:bg-blue-500 btn-outline  ">
                    <FaFacebook className="mr-2 "></FaFacebook>
                Sign In With FaceBook
                </button>
            </div>
        </div>
    );
};

export default FaceBookLogin;

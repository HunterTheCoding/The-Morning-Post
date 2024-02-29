import { FaFacebook } from "react-icons/fa";
import Context from "../../Hook/useContext";
const FaceBookLogin = () => {
  const { SignInWithFacebook } = Context();

  const handleFaceBookSignIn = () => {
    if (SignInWithFacebook) {
      SignInWithFacebook()
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  return (
    <div className="p-8 w-full">
      <div className="divider w-1/2 ml-20"></div>
      <div>
        <button onClick={handleFaceBookSignIn} className="btn w-full bg-blue-800 hover:bg-blue-500 btn-outline">
          <FaFacebook className="mr-2" />
          Sign In With Facebook
        </button>
      </div>
    </div>
  );
};

export default FaceBookLogin;
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Context from "../../Hook/useContext";
import { FcGoogle } from "react-icons/fc";
import "../../App.css";
import logo from "../../assets/login.svg";
const Login: React.FC = () => {
  const location = useLocation();
  const { signInUser, signInWithGoogle } = Context();
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const HandleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const Email = target.email.value;
    const Password = target.password.value;

    signInUser(Email, Password)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        seterror(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    if (signInWithGoogle) {
      signInWithGoogle()
        .then((result: { user: { email: unknown; displayName: unknown } }) => {
          console.log(result.user);
          navigate("/");
        })
        .catch((error: Error) => {
          // Handle any potential errors
          console.error(error);
        });
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200  ">
      <div className="hero-content  flex-col lg:flex-row ">
        <div className="text-center lg:text-left w-full  lg:w-1/2 mr-10 hidden lg:block ">
          <img src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-full  lg:w-1/2">
          <h1 className="text-5xl p-3 font-bold">Login</h1>
          <form className="card-body" onSubmit={HandleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-base">
                Create an Account{" "}
                <Link className="text-blue-600" to="/signup">
                  Signup
                </Link>
              </p>
              {error && <p className="text-base mt-3 text-red-700">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-blue-600 rounded-2xl text-white " type="submit" value="LOGIN" />
            </div>
          </form>
          <div className="form-control px-7 -mt-5 mb-5 ">
            <button onClick={handleGoogleSignIn}>
              <div className="flex justify-center items-center h-10 rounded-2xl border-2 p-6 text-white bg-blue-600">
                <div className="flex space-x-2">
                  <FcGoogle className="mt-1 text-2xl"></FcGoogle>
                  <p className="text-xl font-bold">Google</p>
                </div>
              </div>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
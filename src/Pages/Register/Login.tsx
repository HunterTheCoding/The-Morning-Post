import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import SocialLogin from "../../Components/Register/Social";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Context from "../../Hook/useContext";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [disabled, setDisabled] = useState(true);
const {signInUser}= Context()
  const HandleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string  };
    };
    const Email = target.email.value;
    const Password = target.password.value;

    console.log(Email,typeof(Password));
    signInUser(Email, Password)
      .then((result) => {
        console.log(result);
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });

  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlevalidetCapture = (e: { target: { value: unknown } }) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="grid lg:grid-cols-5">
      <div className="hero grid col-span-3 min-h-screen w-full  bg-base-200 border-2">
        <div className="hero-content w-full flex-col ">
          <div className="text-center lg:text-left">
            <h1 className=" ml-3 lg:ml-5 font-bold lg:font-extrabold text-3xl lg:text-4xl">
              The Morning Post
            </h1>
            <p className="py-6 ml-3 lg:ml-5 font-semibold lg:font-bold text-2xl lg:text-4xl text-blue-700 dark:text-blue-500">
              Login The Account
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleSignIn} className="card-body">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="password"
                  id="Password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <label className="label">
                  {/* <span className="label-text">Password</span>
                   */}
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handlevalidetCapture}
                  type="text"
                  name="Password"
                  id="Password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="type the captcha above"
                  required
                />
              </div>

              <div className="form-control mt-6">
                {/* <input type="submit"  className="btn btn-primary">Login Now</input> */}
                <input
                  type="submit"
                  className="btn btn-outline"
                  disabled={disabled}
                  value="Login Now"
                />
              </div>
            </form>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
              You have Not registered?{" "}
              <Link
                to="/SignUp"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Sign Up{" "}
              </Link>
              <h1 className="pt-5">OR</h1>
            </div>
            <div className="flex -mt-8 justify-center">
              <SocialLogin></SocialLogin>
            </div>
       
          </div>
        </div>
      </div>
      <div>
        <h1>animition</h1>
      </div>
    </div>
  );
};

export default Login;

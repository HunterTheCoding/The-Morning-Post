import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FcGoogle } from "react-icons/fc";
// import toast from "react-hot-toast";
// import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlevalidetCapture = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleOpenSignUpModal = () => {
    document.getElementById("my_modal_sighup").showModal();
  };
  const handleSignUpSubmit = (e) => {

  };

  const handleOpenLoginModal = () => {
    document.getElementById("my_modal_login").showModal();
  };

    return (
        <div>
            <h2 className="text-3xl font-extrabold">This is Login Section</h2>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={handleOpenLoginModal}>open modal</button>

<dialog id="my_modal_login" className="modal">
  <div className="modal-box">
    <form  method="dialog">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

    </form>
    <form
          // onSubmit={HandleFrom}
          // noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div className="flex items-center">
  <label className=" p-2">
    <LoadCanvasTemplate />
  </label>

  <input
    onBlur={handlevalidetCapture}
    type="text"
    placeholder="type the captcha above"
    className="input border-2 ml-4 p-2"  
    name="captcha"
    required
  />
</div>
          </div>

          <div>
          
            <button
            
              disabled={disabled}
              type="submit"
            
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              LOGIN NOW
            </button>
          </div>
        </form>          
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with Social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          // onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with GOOGLE</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <p className="btn" onClick={handleOpenSignUpModal}> Sign up</p>
          .
        </p>
  </div>
</dialog>
<dialog id="my_modal_sighup" className="modal">
  <div className="modal-box">
    <form onClick={handleSignUpSubmit} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form
          // onSubmit={HandleFrom}
          // noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>

          </div>

          <div>
          
            <button
            
              disabled={disabled}
              type="submit"
            
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              LOGIN NOW
            </button>
          </div>
        </form>          
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with Social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          // onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with GOOGLE</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
            </p>
  </div>
</dialog>
        </div>
    );
};

export default Login;
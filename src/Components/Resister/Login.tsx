import React, {  useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import SocialLogin from "./Social";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  const [disabled, setDisabled] = useState(true);


  const  HandleLogin = (e: React.FormEvent<HTMLFormElement>) => {  e.preventDefault()
    const emailvalue= (e.currentTarget.email as HTMLInputElement).value;
    const namevalue = (e.currentTarget.Name as HTMLInputElement).value;
    const passwordvalue = (e.currentTarget.password as HTMLInputElement).value;

  console.log(emailvalue,namevalue,passwordvalue);

  }
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
      <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleLogin} className="card-body">
            <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
            <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="Password" id="Password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="Password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  

              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Password</span>
                   */}
                  <LoadCanvasTemplate />
                </label>
                <input  onBlur={handlevalidetCapture}
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  name="captcha"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {/* <input type="submit"  className="btn btn-primary">Login Now</input> */}
             <input  type="submit" className="btn btn-primary" disabled={disabled} value="Login Now" />
              </div>
            </form>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                            You have Already registered? <Link to='/singup'
                            className="text-blue-700 hover:underline dark:text-blue-500">Login Now</Link>
                        </div>
                     <div className="flex justify-center">
                     <SocialLogin></SocialLogin>
                     </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;
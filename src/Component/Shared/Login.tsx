import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
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
    return (
        <div>
            <h2 className="text-3xl font-extrabold">This is Login Section</h2>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
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
  
  </div>
</dialog>
        </div>
    );
};

export default Login;
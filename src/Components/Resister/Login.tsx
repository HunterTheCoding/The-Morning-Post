import {  useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [disabled, setDisabled] = useState(true);


  const Handleregister = (e: React.FormEvent<HTMLFormElement>) => {     e.preventDefault()
    const emailvalue = (e.currentTarget.email as HTMLInputElement).value;
    const namevalue = (e.currentTarget.Name as HTMLInputElement).value;
    const passwordvalue = (e.currentTarget.password as HTMLInputElement).value;

  console.log(emailvalue,namevalue,passwordvalue);

  }
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlevalidetCapture = (e: { target: { value: any } }) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleOpenModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  
  const handleSignUpOpenModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
    return (
        <div className="flex justify-center gap-4">
            {/* <h2 className="text-3xl font-extrabold">This is Login Section</h2> */}
    
<button className="btn"  onClick={() => handleOpenModal("my_modal_login")}
      >Sign In</button>

<dialog id="my_modal_login" className="modal">
  <div className="modal-box">
    <form  method="dialog">
   
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

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
 
  </div>
</dialog>
<button className="btn" onClick={() => handleSignUpOpenModal("my_modal_sighup")}
      >Sign Up</button>
<dialog id="my_modal_sighup" className="modal">
  <div className="modal-box">
    <form  method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form
          onSubmit={Handleregister}
          // noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="Name"
                name="Name"
                id="Name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
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
            
          
              type="submit"
            
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              Sign Up 
            </button>
          </div>
        </form>          

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Sign Up with Social accounts
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
  
  </div>
</dialog>
        </div>
    );
};

export default Login;
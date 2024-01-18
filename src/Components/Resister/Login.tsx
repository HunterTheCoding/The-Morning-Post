import { useCallback, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Context from "../../Hook/useContext";
import toast from "react-hot-toast";

const Login = () => {
  const [ShowPassword,setShowPassword]=useState(false)
  const {createUser,updeateProfile}=Context()
  const navigate = useNavigate()
  const Handleregister = (e)=>{
      e.preventDefault()
  const emailvalue = e.target.email.value;
  const namevalue = e.target.Name.value;
  const passwordvalue = e.target.password.value;
  // const photoUrlValue = e.target.photoUrl.value;
  // const UserProfile ={
  //     emailvalue,namevalue,passwordvalue,photoUrlValue
  // }
  console.log(emailvalue,namevalue,passwordvalue);
  if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(passwordvalue)) {
      console.log("Valid password:", passwordvalue);
      createUser(emailvalue, passwordvalue)
        .then((result) => {
            toast.success( result.user,'You Have SuccessFully Create Account')
            updeateProfile(emailvalue,namevalue)
            .then((results) => {
  
                console.log(result);
                toast.success('🦄 Wow so easy!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  });
  
   console.log(results.user,'updateProfile successfully  ');
              navigate('/')
            }).catch((error) => {
          
              console.log(error.message);
            });
            
  
        })
        .catch(error => {
          
          toast.error(error.message);
        });
    } else {
     
      toast.error("Password must contain at least one letter and one number, and be at least 8 characters long.");
      
    }
   
    
  console.log(emailvalue,passwordvalue);
  }
  // const onDrop = useCallback(acceptedFiles => {
  //   // Do something with the files
  // }, [])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

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


  const handleOpenLoginModal = () => {
    document.getElementById("my_modal_login").showModal();

  };
  const handleCloseLoginModal = () => {
    // setLoginModalOpen(false);
  };
  const handleCloseSignUpModal = () => {
    // setSignUpModalOpen(false);
  };
  const handleOpenSignUpModal = () => {
    document.getElementById("my_modal_sighup").showModal();
    // handleCloseLoginModal(); // Close the login modal before opening the signup modal
    // setSignUpModalOpen(true);
  };
    return (
        <div className="flex justify-center gap-4">
            {/* <h2 className="text-3xl font-extrabold">This is Login Section</h2> */}
    
<button className="btn" onClick={handleOpenLoginModal}>Sign In</button>

<dialog id="my_modal_login" className="modal">
  <div className="modal-box">
    <form  method="dialog">
   
      {/* if there is a button in form, it will close the modal */}
      <button   onClick={handleCloseLoginModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

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
<button className="btn" onClick={handleOpenSignUpModal}>Sign Up</button>
<dialog id="my_modal_sighup" className="modal">
  <div className="modal-box">
    <form  method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <button onClick={handleCloseSignUpModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
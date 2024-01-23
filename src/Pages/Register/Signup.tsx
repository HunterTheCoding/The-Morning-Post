/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Register/Social";
import Context from "../../Hook/useContext";
import toast, { ToastPosition } from "react-hot-toast";
import axios, { AxiosResponse } from "axios";

// Adjust the interface to match the actual structure of the ImgBB API response
interface ImgbbResponse {
  display_url: string;
  data: {
    
      display_url: string;
      // Add other properties if needed
  
    // Add other properties if needed
  };
}

type ToastOptions = {
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: string;
};

const Signup: React.FC = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = Context();
  const navigate = useNavigate();

  const api_key = "2096348e81bc39817643de553a77e7db";

  const HandleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      image: { files: FileList };
      password: { value: string };
      Confirm_password: { value: string | number };
    };

    const Name = target.name.value;
    const Email = target.email.value;
    const image = target.image.files[0];
    const Password = target.password.value;
    const Confirm_password = target.Confirm_password.value;

    const formData = new FormData();
    formData.append("image", image);

    try {
      // Use async/await to handle the Promise returned by axios.post
      const { data } = await axios.post<AxiosResponse<ImgbbResponse>>(
        `https://api.imgbb.com/1/upload?key=${api_key}`,
        formData
      );

      console.log(Name, Email, Password, Confirm_password, data.data.display_url);

      createUser(Email, Password)
        .then((result) => {
          console.log(result);
          
          if (result && result.user) {
            updateUserProfile(Name, data.data.display_url)
              .then(() => {
                const successOptions: ToastOptions = {
                  position: 'top-right' as ToastPosition,
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                };
                toast.success('You Have Successfully Created an Account', successOptions);

                navigate('/');
              })
              .catch((error: { message: unknown }) => {
                console.log(error.message);
              });
          } else {
            toast.error('User creation failed.');
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error: any) {
      // Declare the type of 'error' explicitly as 'any' or 'Error'
      console.error((error as Error).message);
    }
  };

  return (
    <div className=" py-4  max-w-screen-xl md:flex border-2   justify-around md:ml-10">
                
    <Helmet>
  <title> Service Swap || SIGN UP</title>
</Helmet>
          <div className=" mt-10 shadow-xl border-2  w-full max-w-sm p-4 bg-white  border-gray-200 rounded-lg   sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 md:ml-52">
          <form onSubmit={HandleSignUp} className="  mx-auto">
<h5 className="text-xl mb-6 font-medium text-gray-900 dark:text-white text-center">Create Our Website</h5>
<div className="grid  md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text"  name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
    </div>
 
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-4 mt-7 group">
       <label className="mt-1 peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  <input
           name="image"
              type="file"
              className="file-input mt-7 w-full max-w-xs"
            />
   
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type={ShowPassword ? 'text' : 'password'} name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
      <span className="relative text-xl  -top-8 left-60 md:left-72"    onClick={() => setShowPassword(!ShowPassword)} >
                       
                       {
                    ShowPassword ? <FaEye></FaEye>
                    : <FaEyeSlash 
                    ></FaEyeSlash> 
                    }
        
                   </span>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type={ShowPassword ? 'text' : 'password'} name="Confirm_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
      <span className="relative text-xl  -top-8 left-60 md:left-72"    onClick={() => setShowPassword(!ShowPassword)} >
                       
                       {
                    ShowPassword ? <FaEye></FaEye>
                    : <FaEyeSlash 
                    ></FaEyeSlash> 
                    }
        
                   </span>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>

 

  <button type="submit" className=" btn-outline btn w-full hover:bg-blue-700 bg-blue-600 text-white hover:text-white text-base">Sign Up Now</button>
</form>
<div className="mt-10 text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                            You have Already registered? <Link to='/Login'
                            className="text-blue-700 hover:underline dark:text-blue-500">Sign In </Link>
                            <h1 className="pt-5">
                              OR
                            </h1>
                        </div>
                     <div className="flex -mt-8 justify-center">
                     <SocialLogin></SocialLogin>
                     </div>
                   
          </div>
          <div className=' mt-10  md:w-4/12'>
  {/* <Lottie className='w-4/5' animationData={SignUpAnemition}>
  
  </Lottie> */}
  </div>
          </div>
  );
};

export default Signup;


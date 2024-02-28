import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Context from "../../Hook/useContext";
import "../../App.css";
import axios, { AxiosResponse } from "axios";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

interface ImgbbResponse {
  display_url: string;
  data: {
    display_url: string;
    // Add other properties if needed

    // Add other properties if needed
  };
}

const Login: React.FC = () => {
  const location = useLocation();
  const { signInUser, signInWithGoogle } = Context();
  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { createUser, updateUserProfile } = Context();
  const navigate = useNavigate();

  const api_key = "2096348e81bc39817643de553a77e7db";

  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.add("right-panel-active");
    }
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.remove("right-panel-active");
    }
  };

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
      });
  };

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

      if (Password !== Confirm_password) {
        toast.error("Passwords do not match");
        return; // Exit function if passwords do not match
      } else if (passwordError) {
        toast.error(passwordError);
        return;
      } else {
        // Proceed with sign-up logic
      }

      createUser(Email, Password)
        .then((result) => {
        

          if (result && result.user) {
            updateUserProfile(Name, data.data.display_url)
              .then(() => {
                toast.success("You Have Successfully Created an Account");

                navigate("/");
              })
   
          } else {
            toast.error("User creation failed.");
          }
        })

    } catch (error: any) {
      // Declare the type of 'error' explicitly as 'any' or 'Error'
  
    }
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleGoogleSignIn = () => {
    if (signInWithGoogle) {
      signInWithGoogle()
        .then(() => {
         
          navigate("/");
        
        })
        .catch((error: Error) => {
          // Handle any potential errors
          console.error(error);
        });
    }
  };

  return (
    <div className="App grid  max-w-screen-xl justify-center h-full mt-10 w-full">
      <div className="Login_container  container  w-[1250px]" id="container">
        <div className="form-container sign-up-container">
          <form className="Login_form" onSubmit={HandleSignUp}>
            <h1 className="fast_Heading ">Create Account</h1>
            <div className="social-container py-6">
              <a
                onClick={handleGoogleSignIn}
                className="social cursor-pointer text-black"
              >
                <FaGoogle></FaGoogle>
              </a>
            </div>
            <span className="Content_span">
              or use your email for registration
            </span>
            <input
              className="Login_Input"
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="Login_Input"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input className="Login_Input" name="image" type="file" />
            <input
              className="Login_Input"
              name="password"
              type={ShowPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
            />
            <span
              className="relative text-xl -top-9 left-60 md:left-44 lg:left-56 "
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            <input
              className="Login_Input"
              name="Confirm_password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={validatePassword}
              type={ShowPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <span
              className="relative text-xl  -top-9 left-60 md:left-44 lg:left-56 "
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            {passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}

            <button className="Login_btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="Login_form" onSubmit={HandleSignIn}>
            <h1 className="fast_Heading">Sign in With</h1>
            <div className="social-container py-3">
              <a
                onClick={handleGoogleSignIn}
                className="social  text-black cursor-pointer"
              >
                <FaGoogle></FaGoogle>
              </a>
            </div>
            <span className="Content_span text-xl font-bold ">
              or use your account
            </span>
            <input
              className="Login_Input"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="Login_Input"
              type={ShowPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <span
              className="relative text-xl -top-9 left-60  lg:left-56"
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            <a className="Login_anchor" href="#">
              Forgot your password?
            </a>
            <button className="Login_btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="fast_Heading">Welcome Back!</h1>
              <p className="Content_text">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost Login_btn"
                id="signIn"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="fast_Heading">Hello, Friend!</h1>
              <p className="Content_text">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="ghost Login_btn"
                id="signUp"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

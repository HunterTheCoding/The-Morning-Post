import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/login.svg";
import Context from "../../Hook/useContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
const Signup = () => {
  const { createUser } = Context();
  const [error, seterror] = useState("");
  const naavgate = useNavigate();
  const hendleSignup = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      seterror("Give 6 Character Password");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)) {
      seterror("Give me spical caracter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      seterror("Give me captial letter");
      return;
    }
    createUser(email, password)
      .then((result: any) => {
        console.log(result.user);
        if (result.user) {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          });
          naavgate("/login");
          toast.success("Successfully Register");
        }
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left w-1/2 mr-10 hidden lg:block ">
          <img src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 lg:w-1/2 h-full">
          <h1 className="text-5xl p-2 font-bold">Register</h1>
          <form className="card-body" onSubmit={hendleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="test"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="test"
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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

              <p className="text-base mt-3">
                Have an Account{" "}
                <Link className="text-blue-600" to="/login">
                  Login
                </Link>
              </p>
              {error && <p className="text-base mt-3 text-red-700">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-blue-600 text-white "
                type="submit"
                value="REGISTER"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
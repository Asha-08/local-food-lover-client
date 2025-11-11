import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser,updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

   

  const handleRegister = (e) => {
    e.preventDefault();
   
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // pass validation
    const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!validPass.test(password)){
       toast.error(
      "Password must have at least one uppercase, one lowercase letter, and be 6+ characters long."
    );
    return;
    }

    // toast.loading("Creating user...", { id: "create-user" });

    createUser(email,password)
    .then((result)=>{
        console.log(result.user);
        updateUserProfile(displayName,photoURL);
        
        toast.success("User created succesfully!",{ id: "create-user" });
        navigate("/");
    })
    .catch((error)=>{
        console.log(error);
        toast.error(error.message,{ id: "create-user" });
    });
  };


  const handleWithGoogleSignIn=()=>{
        toast.loading("Creating user...", { id: "create-user" });
        signInWithGoogle()
         .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        console.log(result.user);
        navigate("/");
      })
       .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });

    };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* email field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
            />

            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-orange-500 to-red-600">
              Register
            </button>
          </fieldset>
        </form>

        <button
            onClick={handleWithGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center text-xl font-bold">
          Already have an account? Please{" "}
          <Link className="text-orange-500 hover:text-red-500 font-semibold" to="/auth/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;

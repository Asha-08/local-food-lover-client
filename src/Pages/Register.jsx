import React, { use } from "react";
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!validPass.test(password)) {
      toast.error(
        "Password must have at least one uppercase, one lowercase letter, and be 6+ characters long."
      );
      return;
    }

    toast.loading("Creating user...", { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUserProfile(displayName, photoURL);

        const userInfo = {
          name: displayName,
          email: user.email,
          photoURL: photoURL,
          role: "user",
          createdAt: new Date(),
        };

        fetch("https://local-food-server-pi.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("User created successfully!", {
              id: "create-user",
            });
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleWithGoogleSignIn = () => {
    toast.loading("Creating user...", { id: "create-user" });

    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        const userInfo = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "user",
          createdAt: new Date(),
        };

        fetch("https://local-food-server-pi.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("User created successfully!", {
              id: "create-user",
            });
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200 py-8 sm:py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-content/5">
          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 sm:p-8 text-center">
            <div className="inline-block p-3 bg-white/20 rounded-2xl backdrop-blur-sm mb-3">
              <FaUser className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-white/90 text-sm sm:text-base">
              Join the Flavor Hub community today
            </p>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-base-content flex items-center gap-2">
                    <FaUser className="text-orange-500" />
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  required
                  className="input input-bordered w-full rounded-full bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Photo URL Field */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-base-content flex items-center gap-2">
                    <FaImage className="text-orange-500" />
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  className="input input-bordered w-full rounded-full bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-base-content flex items-center gap-2">
                    <FaEnvelope className="text-orange-500" />
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full rounded-full bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-base-content flex items-center gap-2">
                    <FaLock className="text-orange-500" />
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="input input-bordered w-full rounded-full bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Create a strong password"
                />
                <p className="text-xs text-base-content/60 mt-2 px-4">
                  Must contain uppercase, lowercase, and 6+ characters
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-red-500 hover:to-orange-500 border-0 transform hover:scale-105 transition-all duration-300 shadow-lg mt-6"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-6 text-base-content/60">OR</div>

            {/* Google Sign In */}
            <button
              onClick={handleWithGoogleSignIn}
              className="btn w-full rounded-full bg-base-200 text-base-content border border-base-content/10 hover:bg-base-300 font-semibold transition-all duration-300"
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-sm sm:text-base text-base-content/70 mt-6">
              Already have an account?{" "}
              <Link
                className="text-orange-500 hover:text-red-500 font-semibold transition-colors"
                to="/auth/login"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-6 text-xs sm:text-sm text-base-content/60">
          🔒 Your information is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default Register;

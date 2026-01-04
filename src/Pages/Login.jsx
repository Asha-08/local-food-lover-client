import React, { use } from 'react';
import { FaGoogle, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Auto-fill demo credentials
  const fillDemoCredentials = () => {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    
    if (emailInput && passwordInput) {
      emailInput.value = 'asha123@gmail.com';
      passwordInput.value = 'Asha123@';
    }
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
              Welcome Back
            </h1>
            <p className="text-white/90 text-sm sm:text-base">
              Sign in to continue to Flavor Hub
            </p>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleLogIn} className="space-y-4">
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
                  placeholder="Enter your password"
                />
              </div>

              

              {/* Login Button */}
              <button
                type="submit"
                className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-red-500 hover:to-orange-500 border-0 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-6 text-base-content/60">OR</div>

            {/* Demo Credentials Button */}
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="btn w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white border-0 font-semibold transition-all duration-300 mb-3"
            >
              <FaUser />
              Use Demo Credentials
            </button>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full rounded-full bg-base-200 text-base-content border border-base-content/10 hover:bg-base-300 font-semibold transition-all duration-300"
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            {/* Register Link */}
            <p className="text-center text-sm sm:text-base text-base-content/70 mt-6">
              New to Flavor Hub?{" "}
              <Link
                className="text-orange-500 hover:text-red-500 font-semibold transition-colors"
                to="/auth/register"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-6 text-xs sm:text-sm text-base-content/60">
          🔒 Your login is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default Login;
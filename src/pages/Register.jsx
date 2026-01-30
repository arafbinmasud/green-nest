import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, loginUserWithGoogle, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const userInfo = { displayName: name, photoURL: photo };
    console.log({ name, email, photo, password });
    setError("");

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordValidation.test(password)) {
      setError(
        "Your Password must have an Uppercase letter, a Lowercase letter and the Length must be at least 6 characters",
      );
      return;
    }
    registerUser(email, password)
      .then((res) => {
        console.log(res.user);
        
        updateProfile(auth.currentUser, userInfo)
          .then(() => {
            setUser({...auth.currentUser });
            
            alert("Registration Successful");
            navigate("/");
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginUserWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        err.message;
      });
  };
  return (
    <div className="flex flex-1 items-center justify-center m-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center mb-5">
            Please Register your account
          </h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
                required
              />
              {/* Email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* PhotoURL */}
              <label className="label">PhotURL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="PhotoURL"
               
              />

              {/* Password  */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="btn btn-xs absolute top-7 right-5 border-0"
                >
                  {showPassword ? (
                    <FaEyeSlash size={15}></FaEyeSlash>
                  ) : (
                    <FaEye size={15}></FaEye>
                  )}
                </button>
              </div>
              <p className="text-red-500 font-semibold">{error}</p>
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
          </form>
          <p className="text-center">Or</p>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="font-semibold text-center text-accent">
            Already Have An Account? Please{" "}
            <Link className="text-primary hover:underline" to="/auth/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

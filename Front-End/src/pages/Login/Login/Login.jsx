import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuhtProvider";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";

const Login = () => {
  const { createdUser, signInWithEmail, singInWithGoogle, singInWithGithub } =
    useContext(AuthContext);
  const [error,setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };
  const handelGoogleClick = () => {
    singInWithGoogle()
      .then((result) => {
        const createdUser = result.user;
        navigate(from, { replace: true });
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelGithubClick = () => {
    singInWithGithub()
      .then((result) => {
        const createdUser = result.user;
        navigate(from, { replace: true });
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" w-96 bg-base-200  m-auto">
      <form onSubmit={handleLogin}>
        <div className="rounded-lg shadow-2xl bg-base-100 p-5">
          <h1 className=" text-center text-2xl font-bold">Please Log In</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <p className="mt-2 text-red-700 font-serif">{error}</p>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <div className="pt-5">
            <p className=" text-center font-serif">Or</p>
            <div className=" pt-3 flex text-center justify-center">
              <p className="mr-2 -ml-5 font-serif"> Login With:</p>
              <Link className=" text-3xl mr-5" onClick={handelGoogleClick}>
                <FcGoogle></FcGoogle>
              </Link>
              <Link className="text-3xl" onClick={handelGithubClick}>
                <GoMarkGithub></GoMarkGithub>
              </Link>
            </div>
            <p className="pt-3 pl-1 pb-2 font-serif">
              Dont't have an account?
              <Link to="/register" className=" link text-blue-600">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

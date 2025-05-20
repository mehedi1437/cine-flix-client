import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login.png.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn, googleSignIn } = useContext(AuthContext);

  const token = localStorage.getItem("token");

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setPassError("");

        if (user) {
          Swal.fire({
            icon: "success",
            text: "User Logged in succesfully",
          });
        }
        navigate(from);
      })
      .catch((error) => setPassError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        console.log(loggedUser.email);
        setPassError("");
        if (loggedUser) {
          Swal.fire({
            icon: "success",
            text: "User Logged in succesfully",
          });
          // SAve user info into Db
          if (loggedUser?.email) {
            const userInfo = {
              email: loggedUser.email,
              name: loggedUser.displayName,
            };
            console.log(userInfo);
            fetch("${import.meta.env.VITE_COMMON_APIKEY}/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data)
                localStorage.setItem("token", data?.token);
              });
          }
        }
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 text-black">
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="text-error">{passError}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
              <div className="text-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-success mt-4 "
                >
                  <FaGoogle className="mr-3" /> Log in with google
                </button>
              </div>
              <br />
            </form>
            <p className="mt-4 text-center text-black">
              New to CineFlix ?
              <Link to="/signup" className="text-blue-700 font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

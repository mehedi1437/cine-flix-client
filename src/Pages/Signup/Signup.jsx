import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login.png.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
const Signup = () => {
  const [passError, setPassError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignup = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    // if (
    //   !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(
    //     password
    //   )
    // ) {
    //   setPassError(
    //     "Minimum six characters, at least one letter, one number and one special character"
    //   );
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        updateUserData(result.user, name, photo);
        // setPassError("");
        form.reset();
        setSuccess("User has been created successfully");
        if (success) {
          Swal.fire({
            icon: "success",
            text: "User has been created succesfully",
          });
        }
      })
      .catch((error) => {
        setPassError(error.message);
        console.log(error);
      });

    const updateUserData = (user, name, photoUrl) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "User Created Succesfully",
            icon: "success",
          });
          // console.log("user name updated");
          //  SAve user info into Db
          if (user?.email) {
            const userInfo = {
              email: user.email,
              name: user.displayName,
            };
            // console.log(userInfo);
            fetch("${import.meta.env.VITE_COMMON_APIKEY}/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          }
          navigate(from);
        })
        .catch((error) => console.log(error));
    };
  };

  return (
    <div className="hero min-h-screen bg-base-200 text-black">
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up !</h1>
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <p className="text-error">{passError}</p>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
                  value="SignUp"
                />
              </div>
            </form>
            <p className="text-success">{success}</p>
            <p className="mt-4 text-center">
              Already Have an Account ?
              <Link to="/log-in" className="text-blue-700 font-bold">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

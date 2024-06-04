import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const userDataFromDb = useLoaderData();

  const token = localStorage.getItem("token");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://cine-flix-server-phi.vercel.app/users/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Movie Updated Successfully");
        }
      });
  };
  return (
    <div>
      {/* Form */}
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="text-5xl font-bold text-[#0e193a]">
            Update Your Information
          </h1>

          <div className="card   w-[800px] shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body lg:grid grid-cols-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  {...register("name")}
                  defaultValue={userDataFromDb.name}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  value={userDataFromDb.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  {...register("img")}
                  defaultValue={userDataFromDb.img}
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  {...register("age")}
                  defaultValue={userDataFromDb.age}
                  type="number"
                  placeholder="Age"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile number</span>
                </label>
                <input
                  {...register("mobile")}
                  defaultValue={userDataFromDb.mobile}
                  type="number"
                  placeholder="Mobile Number"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6 col-span-2">
                <input className="btn bg-[#0e193a] text-white" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

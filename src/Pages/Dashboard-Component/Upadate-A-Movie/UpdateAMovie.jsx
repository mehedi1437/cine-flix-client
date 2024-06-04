import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
const UpdateAMovie = () => {

    const movies = useLoaderData();
    console.log(movies);
    const {_id,name,img,rating,genre,language,releaseDate,description} = movies || {}

    const {
        register,
        handleSubmit,
    
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/update-movies/${_id}`,{
            method:'PUT',
            headers: {"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
           if(data.modifiedCount ){
            toast.success('Movie Updated Successfully ');
           }
        })
      };
      const {user} = useContext(AuthContext)
    
    return (
        <div>
            {/* Form */}
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="text-5xl font-bold text-[#0e193a]">Update  Your Movie</h1>

          <div className="card   w-[800px] shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body lg:grid grid-cols-2"
            >
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Name</span>
                </label>
                <input
                {...register("name")}
                  type="text"
                  defaultValue={name}
                  placeholder="Movie Name"
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
                  value={user.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select {...register("genre")} defaultValue={genre} className="input input-bordered">
                  <option value="Action">Action</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Commedy">Commedy</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Si-Fi">Si-Fi</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                {...register("rating")}
                defaultValue={rating}
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Release Date</span>
                </label>
                <input
                {...register("releaseDate")}
                defaultValue={releaseDate}
                  type="date"
                  placeholder="Release date"
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
                defaultValue={img}
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <select {...register("language")} defaultValue={language} className="input input-bordered">
                  <option value="Action">Bangla</option>
                  <option value="Romantic">Hindi</option>
                  <option value="Commedy">Tamil</option>
                  <option value="Thriller">Telegu</option>
                  <option value="Si-Fi">English</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                {...register("description")}
                  type="text"
                  defaultValue={description}
                  placeholder="Description"
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

export default UpdateAMovie;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAllMovie = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_COMMON_APIKEY}/singleMovie/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [user]);

  // Handele Movie delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("delete comfirmed");
        fetch(`${import.meta.env.VITE_COMMON_APIKEY}/movie/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Movie  has been deleted.", "success");
              const remaining = movies.filter((movie) => movie._id !== id);
              setMovies(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-center lg:text-3xl py-6 text-xl ">
        My Created Movies are Here {movies.length}
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-black gap-5 mx-5">
        {movies?.map((movie) => (
          <div key={movie._id} className="card ">
            <figure>
              <Link to={`/view-details/${movie._id}`}>
                <img
                  className="lg:h-[330px] lg:w-[240px] h-[212px] w-[164px]"
                  src={movie.img}
                  alt="movie"
                />
              </Link>
            </figure>
            <div className="  py-2 lg:p-3 ml-10">
              <h2 className="lg:card-title ">{movie.name}</h2>
              <p>Rating : {movie.rating}</p>
            </div>
            <div className=" mt-4 space-x-10">
              <button className="btn bg-[#0e193a] text-white">
                <Link to={`/dashboard/update-movie/${movie._id}`}>Edit</Link>{" "}
              </button>

              <button
                onClick={() => handleDelete(movie._id)}
                className="btn bg-[#0e193a] text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAllMovie;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyAllMovie = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/singleMovie/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="text-center text-3xl my-6 ">
        My Created Movies are Here {movies.length}
      </h1>
      <div className="grid grid-cols-4 text-black gap-5 mx-5">
        {movies?.map((movie) => (
          <div key={movie._id} className="card ">
            <figure>
              <Link to={`/view-details/${movie._id}`}>
                <img
                  className="h-[330px] w-[240px]"
                  src={movie.img}
                  alt="movie"
                />
              </Link>
            </figure>
            <div className="  ml-10">
              <h2 className="card-title ">{movie.name}</h2>
              <p>Rating : {movie.rating}</p>
            </div>
            <div className="space-x-5 mt-4 ">
              <button  className="btn bg-[#0e193a] text-white"><Link to={`/dashboard/update-movie/${movie._id}`}>Edit</Link>  </button>
             
              <button className="btn bg-[#0e193a] text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAllMovie;

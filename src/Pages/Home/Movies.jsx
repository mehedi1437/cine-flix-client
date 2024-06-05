import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  //  handle movie search
  const handleMovieSearch = () => {
    fetch(`http://localhost:5000/movieSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  };
  console.log(searchText);
  return (
    <div>
      <h1 className="text-center text-3xl my-7">
        Your Favourite Movies are Here {movies.length}
      </h1>
      <div className="flex space-x-2  my-10 w-fit mx-auto">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs text-black"
        />
        <button
          onClick={handleMovieSearch}
          className="btn bg-[#f4626e] border-none"
        >
          search
        </button>
      </div>
      <div className="grid grid-cols-4">
        {movies?.map((movie) => (
          <div key={movie._id} className="card ">
            <figure>
              {" "}
              <Link to={`/view-details/${movie._id}`}>
                <img
                  className="h-[330px] w-[240px]"
                  src={movie.img}
                  alt="movie"
                />
              </Link>{" "}
            </figure>
            <div className="card-body  ml-10">
              <h2 className="card-title">{movie.name}</h2>
              <p>Rating : {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

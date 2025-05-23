import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("Action");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_COMMON_APIKEY}/movies/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [activeTab]);
  //  handle movie search
  const handleMovieSearch = () => {
    fetch(`${import.meta.env.VITE_COMMON_APIKEY}/movieSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  };
  const handleViewMovie = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="my-20 space-y-5 mx-5 lg:flex justify-between items-center">
        <div>
          <h3 className="w-fit border-b-[#f4626e] border-b-4 text-3xl ">
            Latest Movies
          </h3>
        </div>
        <div className=" space-x-2 space-y-2">
          <button
            onClick={() => handleTabClick("Action")}
            className={
              activeTab == "Action"
                ? "bg-[#f4626e] lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Action
          </button>
          <button
            onClick={() => handleTabClick("Romantic")}
            className={
              activeTab == "Romantic"
                ? "bg-[#f4626e] lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Romantic
          </button>
          <button
            onClick={() => handleTabClick("Commedy")}
            className={
              activeTab == "Commedy"
                ? "bg-[#f4626e] lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Commedy
          </button>
          <button
            onClick={() => handleTabClick("Thriller")}
            className={
              activeTab == "Thriller"
                ? "bg-[#f4626e] lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Thriller
          </button>
          <button
            onClick={() => handleTabClick("Si-Fi")}
            className={
              activeTab == "Si-Fi"
                ? "bg-[#f4626e] lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Si-Fi
          </button>
        </div>
        <div className="flex space-x-2 ">
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
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {movies?.map((movie) => (
          <div
            onClick={() => handleViewMovie(movie._id)}
            key={movie._id}
            className="card "
          >
            <figure>
              <Link to={`/view-details/${movie._id}`}>
                <img
                  className="lg:h-[330px] lg:w-[240px] h-[212px] w-[164px]"
                  src={movie.img}
                  alt="movie"
                />
              </Link>
            </figure>
            <div className="lg:card-body  p-4 lg:p-3 ml-10">
              <h2 className="lg:card-title ">{movie.name}</h2>
              <p>Rating : {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllMovies;

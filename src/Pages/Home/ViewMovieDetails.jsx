import { useLoaderData } from "react-router-dom";

const ViewMovieDetails = () => {
  const viewDetails = useLoaderData();

  const {img, name,genre,  rating,releaseDate, description } =
    viewDetails || {};
    console.log(name);
  return (
    <div className="max-w-lg mx-auto my-10 p-10 rounded-lg">
      <div className=" mx-auto">
        <img className=" h-[531px] w-[404px] rounded-lg" src={img} alt="" />
      </div>
      <div className="text-xl my-12 text-white  space-y-4">
        <p>Movie name : {name}</p>
        <p> Genre  : {genre}</p>
        <p>Rating : {rating}/10</p>
        <p>Release date : {releaseDate}</p>
        <p> Details : {description}</p>
      </div>
      <div className="space-x-4">
        <button className="btn border-none bg-[#f4626e] ">Download</button>
        <button className="btn border-none bg-[#f4626e]">Watch Trailer</button>
      </div>
    </div>
  );
};

export default ViewMovieDetails;

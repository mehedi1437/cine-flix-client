const AllMovies = () => {
  return (
    <div className="my-20">
      <div className="flex  ">
      <label  className="input input-bordered flex items-center  w-2/4" >
        <input type="text" className="text-black"  placeholder="Search Your Favourite movie" />
       
      </label>
      <button className="btn bg-[#f4626e] border-none ml-4 text-center">search</button>

      </div>
      
      <h3 className="w-fit border-b-[#f4626e] border-b-4 mx-auto text-3xl mt-10">Latest Movies</h3>
    </div>
  );
};

export default AllMovies;

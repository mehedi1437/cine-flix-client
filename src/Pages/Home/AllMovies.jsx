import { useState } from "react";

const AllMovies = () => {


  const [activeTab,setActiveTab] = useState('Action')
  const handleTabClick =(tabName)=>{
    setActiveTab(tabName)

  }
  return (
    <div className="my-20 flex justify-between items-center">
      <div>
        <h3 className="w-fit border-b-[#f4626e] border-b-4 text-3xl ">
          Latest Movies
        </h3>
      </div>
      <div className=" space-x-2">
        <button onClick={()=>handleTabClick('Action')} className={activeTab == 'Action' ? 'bg-[#f4626e] p-3' : 'bg-white p-3 text-black' } >Action</button>
        <button onClick={()=>handleTabClick('Romantic')} className={activeTab == 'Romantic' ? 'bg-[#f4626e] p-3' : 'bg-white p-3 text-black' } >Romantic</button>
        <button onClick={()=>handleTabClick('Commedy')} className={activeTab == 'Commedy' ? 'bg-[#f4626e] p-3' : 'bg-white p-3 text-black' } >Commedy</button>
        <button onClick={()=>handleTabClick('Thriller')} className={activeTab == 'Thriller' ? 'bg-[#f4626e] p-3' : 'bg-white p-3 text-black' } >Thriller</button>
        <button onClick={()=>handleTabClick('Si-Fi')} className={activeTab == 'Si-Fi' ? 'bg-[#f4626e] p-3' : 'bg-white p-3 text-black' } >Si-Fi</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default AllMovies;

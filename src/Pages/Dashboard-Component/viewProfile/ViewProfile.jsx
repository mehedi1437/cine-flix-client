import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ViewProfile = () => {
    const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  console.log(userInfo);
    return (
        <div className="min-h-[100%] flex items-center ">
            <div className="card  w-[80%] lg:w-[50%] mx-auto  shadow-xl">
                <h1 className="text-center my-4">View And Update your profile</h1>
        <h2 className="text-center lg:text-2xl my-3 border-b-4 border-b-[#0e193a] w-fit mx-auto">
          Profile Information
        </h2>
        <figure>
          <img
            className="lg:h-[200px] lg:w-[170px] h-[130px] w-[120px] rounded-md"
            src={userInfo?.img || user.photoURL}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl"> User name : {userInfo?.name}!</h2>
          <p className="text-xl"> User Email : {userInfo?.email}</p>
          <p className="text-xl">Age : {userInfo?.age}</p>
          <p className="text-xl"> Mobile No : {userInfo?.mobile}</p>
          <div className="card-actions ">
            <button className="btn  bg-[#0e193a] text-white">
              <Link to={`/dashboard/update-profile/${userInfo?._id}`}>
                Edit Profile
              </Link>
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ViewProfile;
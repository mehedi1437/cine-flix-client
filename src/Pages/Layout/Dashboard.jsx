import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:grid grid-cols-4 gap-4 ">
      <div className="side-bar col-span-1	h-[100vh]">
        <ul className="mt-16 p-4 w-80 space-y-3 text-bold font-mono text-xl  text-white">
          {/* Sidebar content here */}
          <li>
            <Link to='/dashboard/'>DashBoard Home</Link>
          </li>
          <li>
            <Link to='/dashboard/add-a-movie'>Create a Movie</Link>
          </li>
          <li>
            <Link to='/dashboard/my-all-movies'>My All Movies</Link>
          </li>
          <li>
            <Link>View and Edit Profile</Link>
          </li>
          <li>
            <Link to="/">Back to home</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard-content col-span-3 bg-white w-[72vw] text-black">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

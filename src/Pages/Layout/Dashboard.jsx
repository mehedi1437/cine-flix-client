import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:grid grid-cols-4 gap-4 ">
      <div className="side-bar col-span-1	lg:h-[100vh]">
        <ul className="lg:mt-16  mx-8 lg:mx-0 pt-10 p-4 w-80 space-y-3 text-bold font-mono text-xl  text-white">
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
            <Link to='/dashboard/view-profile'>View and Edit Profile</Link>
          </li>
          <li>
            <Link to="/">Back to home</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard-content lg:col-span-3 bg-white lg:w-[72vw] text-black">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

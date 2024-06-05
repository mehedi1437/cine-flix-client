import { Link,  } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleSignOut = () => {
    LogOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to='/all-movies'>Movies</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
     
     
      
    </>
  );

  return (
    <div className=" font-mono font-semibold text-xl ">
    <div className="navbar "> 
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" text-black pl-7 z-10  dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <li className="list-none">
            <Link to="/">
              <img className="h-28 w-30" src={logo} alt="" />
            </Link>
          </li>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" space-x-4 menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/">
              <button
                onClick={handleSignOut}
                className="btn  bg-[#f4626e] border-none mt-2 mx-5  "
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/log-in">
              <button className="btn border-none bg-[#f4626e] mr-8">
                Login
              </button>
            </Link>
          )}

          <div className="avatar">
            <div className="w-12 rounded-full mt-3">
              {user ? (
               <Link to='/dashboard/view-profile'><img title='View Profile' src={user?.photoURL} alt="" /></Link> 
              ) : (
                <img title="view Profile" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

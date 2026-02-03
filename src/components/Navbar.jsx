import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // একটি কমন ক্লাস ফাংশন যা কোড ক্লিন রাখবে
  const navLinkStyles = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-primary" : "text-gray-500 hover:text-primary"
    }`;

  return (
    <header className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-4 sm:px-10">
      <div className="flex-1">
        <NavLink to="/" className="group flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
             </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Todo<span className="text-primary">Flow</span>
          </span>
        </NavLink>
      </div>

      <nav className="flex items-center gap-6">
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>

        {user ? (
          <div className="flex items-center gap-4">
            <NavLink to="/dashboard" className={navLinkStyles}>Dashboard</NavLink>
            
            {/* User Profile/Logout Section */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-primary/20 border">
                <div className="w-9 rounded-full">
                  <img src={user?.photoURL || "https://ui-avatars.com/api/?name=" + user?.email} alt="profile" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-52 border border-slate-100">
                <li className="px-4 py-2 font-semibold text-slate-700 truncate">{user?.email}</li>
                <div className="divider my-0"></div>
                <li><button onClick={handleLogout} className="text-error font-medium">Logout</button></li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <NavLink to="/login" className="btn btn-ghost btn-sm capitalize">Login</NavLink>
            <NavLink to="/register" className="btn btn-primary btn-sm capitalize px-6 rounded-full shadow-md shadow-primary/20">
              Get Started
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
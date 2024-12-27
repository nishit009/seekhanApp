import logoimg from "./assets/logo.png";
import logoimg1 from "./assets/updated_logo.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthorContext";
import { NavLink } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const openGit = () => {
    navigate("/Git");
  };
  const openSignup = () => {
    navigate("/Signup");
  };
  const { isLoggedIn, logout, isAdmin } = useContext(AuthContext);

  return (
    <>
      <nav className="w-full h-[80px] px-[50px] flex justify-between items-center text-white bg-[#002D62] ">
        <div className="">
          <img src={logoimg1} className="w-auto h-[30px]" />
        </div>
        <ul className="flex justify-center text-center space-x-6 ">
          <li className="mx-[3] font-bold cursor-pointer">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-[#59AACF] decoration-2 underline-offset-4" // Thin underline with a gap
                  : "hover:underline hover:decoration-[#59AACF] hover:decoration-2 hover:underline-offset-4"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-[3] font-bold cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-[#59AACF] decoration-2 underline-offset-4" // Thin underline with a gap
                  : "hover:underline hover:decoration-[#59AACF] hover:decoration-2 hover:underline-offset-4"
              }
            >
              About
            </NavLink>
          </li>
          {isAdmin && (
            <>
              <li className="mx-[3] font-bold cursor-pointer">
                <NavLink
                  to="/Git"
                  className={({ isActive }) =>
                    isActive
                      ? "underline decoration-[#59AACF] decoration-2 underline-offset-4" // Thin underline with a gap
                      : "hover:underline hover:decoration-[#59AACF] hover:decoration-2 hover:underline-offset-4"
                  }
                >
                  Git
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="mx-[3] font-bold cursor-pointer">
                <NavLink
                  to="/quiz"
                  className={({ isActive }) =>
                    isActive
                      ? "underline decoration-[#59AACF] decoration-2 underline-offset-4" // Thin underline with a gap
                      : "hover:underline hover:decoration-[#59AACF] hover:decoration-2 hover:underline-offset-4"
                  }
                >
                  Quiz
                </NavLink>
              </li>
              <li className="mx-[3] font-bold cursor-pointer">
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
        {!isLoggedIn && (
          <>
            <div className="space-x-2">
              <button
                className="outline-none bg-[#59AACF] hover:bg-[#011732] w-fit h-fit px-2 font-bold py-2"
                onClick={openSignup}
              >
                SignUp
              </button>
              {/* <button
            className="outline-none bg-[#59AACF] hover:bg-[#011732] w-fit h-fit px-2 font-bold py-2"
            onClick={openSignup}
          ></button> */}
            </div>
          </>
        )}
      </nav>
    </>
  );
}
export default NavBar;

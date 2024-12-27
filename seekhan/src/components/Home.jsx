import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext } from "react";
import imagepath from "./assets/projectseekhan_logo.png";
import { AuthContext } from "./AuthorContext";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <header className="w-full h-screen bg-black flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <img src={imagepath} alt="" className="w-auto h-[150px] " />
          <p className="mt-4 text-white text-4xl font-semibold ">
            Welcome to Seekhan!
          </p>
          {!isLoggedIn && (
            <>
              <a
                href="login"
                className="absolute mt-[250px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                 text-4xl font-bold transition-all duration-500 hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600"
              >
                LOGIN
              </a>
            </>
          )}
        </div>
      </header>
    </>
  );
}
export default Home;

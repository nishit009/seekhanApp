import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext } from "react";
import imagepath from "./assets/projectseekhan_logo.png";
import { AuthContext } from "./AuthorContext";
import ParticleBackground from "./ParticleBackground"; 


function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>

      <div className="absolute top-0 left-0 w-[800px] h-[400px] -z-10">
        <ParticleBackground />
      </div>

      <header className="w-full h-screen flex items-center justify-center">
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

          <button 
            className="mt-8 quiz-button" 
            onClick={() => navigate('/quiz')} // Navigate to /quiz
          >
            Quiz
          </button>

        </div>
      </header>

      {/* You might want to move this to a separate CSS file later */}
      <style jsx>{`
        .quiz-button {
          appearance: none;
          background-color: #18e1b0;
          border: 0.125em solid #1A1A1A;
          border-radius: 0.9375em;
          box-sizing: border-box;
          color: #3B3B3B;
          cursor: pointer;
          display: inline-block;
          font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 16px;
          font-weight: 600;
          line-height: normal;
          margin-top: 30px;
          min-height: 3.75em;
          min-width: 0;
          outline: none;
          padding: 1em 2.3em;
          text-align: center;
          text-decoration: none;
          transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          will-change: transform;
        }

        .quiz-button:disabled {
          pointer-events: none;
        }

        .quiz-button:hover {
          color: #fff;
          background-color: #002D62;
          box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
          transform: translateY(-2px);
        }

        .quiz-button:active {
          box-shadow: none;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
export default Home;

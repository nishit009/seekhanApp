import NavBar from "./NavBar";
import Footer from "./Footer";
import imagepath from "./assets/desktop.png";
function Home() {
  return (
    <>
      <header className="w-full h-screen font-bold text-blue-500 bg-black">
        <div className="flex flex-wrap flex-col items-center justify-center relative">
          <img src={imagepath} alt="" className="w-full h-screen" />
          <a
            href="login"
            className="absolute mt-[250px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                 text-4xl font-bold transition-all duration-500 hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600"
          >
            LOGIN
          </a>
        </div>
      </header>
    </>
  );
}
export default Home;

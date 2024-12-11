import NavBar from "./NavBar";
import Footer from "./Footer";
import imagepath from "./assets/desktop.png";
function Home() {
  return (
    <>
      <header className="w-full h-screen font-bold text-blue-500 bg-black">
        <div className="flex flex-wrap flex-col items-center justify-center">
          <img src={imagepath} alt="" className="w-full h-full" />
        </div>
      </header>
    </>
  );
}
export default Home;

import logoimg from "./assets/logo.png";
function NavBar() {
  const openLogin = () => {
    window.open("http://localhost:5173/Login");
  };
  const openSignup = () => {
    window.open("http://localhost:5173/signup");
  };

  return (
    <>
      <nav className="w-full h-[80px] px-[50px] flex justify-between items-center text-white bg-orange-400 ">
        <div className="">
          <img src={logoimg} className="w-[100px] h-[80px] bg-orange-400" />
        </div>
        <ul className="flex justify-center text-center space-x-6 ">
          <li className="mx-[3] font-bold cursor-pointer">
            <a href="home">home</a>
          </li>
          <li className="mx-[3] font-bold cursor-pointer">
            <a href="about">about</a>
          </li>
          <li className="mx-[3] font-bold cursor-pointer">
            <a href="quiz">quiz</a>
          </li>
          <li className="mx-[3] font-bold cursor-pointer">
            <a href="xxx">xxx</a>
          </li>
        </ul>
        <div className="space-x-2">
          <button
            className="outline-none bg-red-500 hover:bg-orange-400 w-fit h-fit px-2 font-bold py-2"
            onClick={openSignup}
          >
            signup
          </button>
          <button
            className="outline-none bg-red-500 hover:bg-orange-400 w-fit h-fit px-2 font-bold py-2"
            onClick={openSignup}
          ></button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

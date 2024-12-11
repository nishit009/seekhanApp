import logo from "./assets/logo.png";
function Footer() {
  return (
    <>
      <footer className="w-full px-4 bg-gray-600 text-white pt-8 flex flex-col  flex-wrap justify-between">
        <div className="bg-white w-full h-[2px]"></div>
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[100px] h-[100px] font-bold text-2xl"
          />
          <p>Email :projectseekhan@gmail.com</p>
          <p>instagram : seekhan_quiz</p>
          <p>contact us: 905971875</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;

import logo from "./assets/updated_logo.png";

function Footer() {
  return (
    <>
      <footer className="w-full px-4 bg-gray-800 text-white pt-8 flex flex-col justify-between">
        <div className="bg-white w-full h-[2px]"></div>
        <div className="flex flex-wrap justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="w-auto h-[50px] font-bold text-2xl"
          />
          <div className="flex flex-row space-x-6">
            <p>Email: projectseekhan@gmail.com</p>
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/seekhan_quiz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                seekhan_quiz
              </a>
            </p>
            <p>Contact Us: 905971875</p>
            
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-center">
            &copy; 2024 Seekhan. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

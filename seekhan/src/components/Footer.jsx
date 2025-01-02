import logo from "./assets/updated_logo.png";

function Footer() {
  return (
    <>
      <footer className="w-full px-4 bg-gray-800 text-white pt-8 flex flex-col justify-between">
        <div className="bg-white w-full h-[1.5px] mb-[20px]"></div>
        <div className="flex flex-wrap justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="w-auto h-[50px] font-bold text-2xl"
          />
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqsbNWzfVvfNxTCqSNnpqNdvxvxqWjphMbwKNhsxgvGSCXbZqxTjKMQlNkpHhgnbpnzcL">Email: projectseekhan@gmail.com</a>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/seekhan_quiz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              seekhan_quiz
            </a>
          </p>
          <p>Contact Us: 9059718675</p>
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

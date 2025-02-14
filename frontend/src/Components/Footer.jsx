const Footer = () => {
  
  return (
    <div className="bg-black fixed bottom-0 left-0 right-0 w-full  p-4 ">
      <footer className="  w-full shadow m-4 ">
        <div className="flex justify-between  items-center ">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
            Zephyr
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0">
            <li>
              <a href="#" className="hover:text-white me-4 md:me-6">
                About
              </a>{" "}
            </li>
            <li>
              <a href="#" className="hover:text-white me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white me-4 md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-black " />
        <div className="mt-4 mb-4">
          <a
            href="https://github.com/focusedaf"
            className="text-white hover:text-gray-400 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="text-white hover:text-gray-400 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/your-profile"
            className="text-white hover:text-gray-400 mx-2"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/your-profile"
            className="text-white hover:text-gray-400 mx-2"
          >
            Instagram
          </a>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a href="#" className="hover:text-white">
            Zephyr
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;

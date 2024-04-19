import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const copyMail = () => {
    setShow(true);
    navigator.clipboard.writeText("bhoomaahamso@gmail.com")
    setTimeout(() => setShow(false), 2000)
  }
  return (
    <nav className="flex items-center justify-end py-6">
      <div className="flex items-center justify-center gap-4">
        <div className="">
          <SocialIcon
            className="hover:bg-pink-400 rounded-full hover:scale-125 duration-300 cursor-pointer"
            onClick={copyMail}
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <div className={`absolute ${!show && "hidden"}`}>
            <p className="bg-black px-2 py-1 rounded-3xl relative -left-3 before:w-0 before:h-0 before:border-x-[10px] before:border-solid before:border-x-transparent before:border-b-[10px] before:border-b-black before:-top-2 before:left-7 before:absolute">
              Copied!
            </p>
          </div>
        </div>
        <SocialIcon
          className="hover:bg-pink-400 rounded-full hover:scale-125 duration-300"
          url="https://twitter.com/bhoomaahamso"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:bg-pink-400 rounded-full hover:scale-125 duration-300"
          url="https://www.linkedin.com/in/bhoomaahamso-dharamalayenam-041b291a5/"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:bg-pink-400 rounded-full hover:scale-125 duration-300"
          url="https://github.com/Bhoomaahamso"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
    </nav>
  );
};
export default Navbar;

import "../../../index.scss";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="navWrap bg-[#262626] pb-10 relative">
      <div className="top transition-all duration-1000 ease-out hidden md:flex justify-between mx-16 md:mx-16 lg:mx-32 ">
        <div className="leftNav flex">
          <div className="email group hover:bg-white transition-all duration-1000 ease-in flex items-center space-x-1 py-3 px-2 cursor-pointer">
            <div className="icon group-hover:text-black transition-all duration-1000 ease-in md:text-2xl lg:text-3xl text-[#c29d59]">
              <span>
                <MdEmail />
              </span>
            </div>
            <div className="Detail group-hover:text-black transition-all duration-1000 ease-in text-white font-roboto">
              <span>aphrogarrix10@gmail.com</span>
            </div>
          </div>
          <div className="phone group transition-all duration-300 ease-in-out flex items-center space-x-1 border-l-2 py-3 px-2 hover:bg-white cursor-pointer">
            <div className="icon md:text-2xl lg:text-3xl group-hover:text-black transition-all duration-1000 ease-in text-3xl text-[#c29d59]">
              <span>
                <FaPhone />
              </span>
            </div>
            <div className="Detail text-[1rem] group-hover:text-black transition-all duration-1000 ease-in text-white font-roboto">
              <span>+250789438437</span>
            </div>
          </div>
        </div>
        <div className="rightNav flex ">
          <div className="socials md:text-2xl lg:text-3xl text-xl text-[#c29d59] px-4 flex items-center hover:bg-white hover:text-black cursor-pointer transition-all duration-1000 ease-in">
            <TfiFacebook />
          </div>
          <div className="socials md:text-2xl lg:text-3xl text-xl text-[#c29d59] border-x-2 px-4 flex items-center hover:bg-white hover:text-black cursor-pointer transition-all duration-1000 ease-in">
            <GrInstagram />
          </div>
          <div className="socials text-xl md:text-2xl lg:text-3xl  text-[#c29d59] px-4 flex items-center hover:bg-white hover:text-black cursor-pointer transition-all duration-1000 ease-in">
            <FaXTwitter />
          </div>
        </div>
      </div>
      <div className="botto md:py-0 py-4 bg-white transition-all duration-1000 ease-out top-0 md:top-[3.2rem] w-full md:w-[84%] md:mx-16 lg:mx-24 absolute flex items-center justify-between px-4 sm:px-10">
        <div className="log flex items-center space-x-2 sm:py-5">
          <span className="text-2xl font-extrabold rounded border-4 border-[#c29d59] sm:p-2 md:p-3 text-[#c29d59]">
            GT
          </span>
          <span className="sm:text-2xl text-sm font-extrabold">
            Garrix Tour ltd
          </span>
        </div>
        <div className="navs flex space-x-2 sm:space-x-4">
          <button className="bg-[#c29d59] px-5 sm:px-10 md:text-xl font-bold rounded-lg my-2 md:my-1 text-white mt-2 sm:pb-0 pb-1">
            Reserve
          </button>
          <span className="flex items-center justify-center px-2 sm:px-1 md:px-3 text-xl my-1 md:my-0 sm:text-3xl rounded-full border-2 border-black">
            <HiSearch />
          </span>
          <span className="bg-[#c29d59] flex items-center justify-center px-2 sm:px-2 md:px-3 my-1 sm:my-0 py-2 md:py-3 text-2xl sm:text-4xl rounded-full text-white">
            <BiMenuAltRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

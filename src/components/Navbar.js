import logo from "../assets/logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const openNav = () => {
    const upNav = document.querySelector("#upNav");
    upNav.classList.remove("translate-y-[-100%]");
  };

  const closeNav = () => {
    const upNav = document.querySelector("#upNav");
    upNav.classList.add("translate-y-[-100%]");
  };
  return (
    <div className="flex relative items-center justify-between  md:pt-4 pt-8 md:px-4 sm:px-6 px-12 ">
      <div className="cursor-pointer">
        <img className="sm:w-28" src={logo} alt="" />
      </div>

      <div className="font-bold sm:hidden md:text-lg text-xl flex gap-8 md:gap-4 text-black">
        <a href="https://github.com/ATIKSH09">HOME</a>
        <a href="https://github.com/ATIKSH09">GALLERY</a>
        <a href="https://github.com/ATIKSH09">EVENTS</a>
        <a href="https://github.com/ATIKSH09" className="flex items-center">
          FESTS <MdOutlineKeyboardArrowDown />
        </a>
      </div>

      <div>
        <button className="font-bold sm:hidden md:text-lg text-xl border-black border-2 py-2 px-4 rounded-full">
          LETS CONNECT
        </button>
      </div>

      <div
        id="open"
        onClick={openNav}
        className="hidden cursor-pointer sm:block"
      >
        <IoMenu size={40} />
      </div>

      <div
        id="upNav"
        className=" absolute z-[100000] left-0 pt-4 bg-white w-[100%] duration-500 top-0 translate-y-[-100%] flex flex-col"
      >
        <div className="font-bold text-xl justify-center items-center flex flex-col gap-8 md:gap-4 text-black">
          <a
            className="justify-center border-b-2 w-[80%] border-black items-center flex"
            href="https://github.com/ATIKSH09"
          >
            HOME
          </a>
          <hr />
          <a
            className="justify-center border-b-2 w-[80%] border-black items-center flex"
            href="https://github.com/ATIKSH09"
          >
            GALLERY
          </a>
          <hr />
          <a
            className="justify-center border-b-2 w-[80%] border-black items-center flex"
            href="https://github.com/ATIKSH09"
          >
            EVENTS
          </a>
          <hr />
          <a
            className="justify-center border-b-2 w-[80%] border-black items-center flex"
            href="https://github.com/ATIKSH09"
          >
            FESTS <MdOutlineKeyboardArrowDown />
          </a>
        </div>

        <div
          id="close"
          onClick={closeNav}
          className="flex cursor-pointer pb-4 justify-center mt-12 items-center"
        >
          <AiOutlineClose size={50} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

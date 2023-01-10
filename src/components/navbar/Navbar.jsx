import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImExit } from "react-icons/im";

const Navbar = ({ togle, handleTogle }) => {
  return (
    <div className="p-4 bg-gray-200">
      <ul className="flex flex-wrap justify-between px-3 text-2xl">
        <li>{togle ? <AiOutlineMenu onClick={handleTogle} /> : ""}</li>
        <li>
          <ImExit />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

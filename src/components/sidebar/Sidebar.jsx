import React from "react";
import { RxCross1 } from "react-icons/rx";
const Sidebar = ({ togle, handleTogle }) => {
  return (
    <>
      {!togle ? (
        <div className="absolute top-0 left-0 w-72 bg-gray-100 py-3">
          <div className="flex justify-around gap-8 pb-2 items-center border-b border-gray-300 text-2xl">
            <img
              src="https://www.logodesign.net/images/nature-logo.png"
              alt=""
              className="h-20 "
            />

            <RxCross1
              className="cursor-pointer hover:text-blue-400"
              onClick={handleTogle}
            />
          </div>
          <div className="mx-2">
            <ul>
              {menuItem.map((el, i) => (
                <li
                  key={i}
                  className="py-3 pl-4 text-sm border-b hover:bg-gray-200"
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;

const menuItem = [
  "Dashboard",
  "Masters",
  "Country Master",
  "State Master",
  "Region Master",
  "District Master",
  "City Master",
  "Brand Master",
  "Category Master",
  "Family Master",
  "Product Master",
];

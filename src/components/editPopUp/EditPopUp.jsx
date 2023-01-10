import React from "react";

const EditPopUp = ({ popUp }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-full h-screen bg-custom flex justify-center items-center">
      <div className="bg-gray-50 border border-gray-200 rounded-md p-2 w-1/2 min-h-[200px] px-4 py-4">
        <div className="border-b border-gray-400 p-2 flex justify-between">
          <h1 className="text-gray-700 font-semibold text-lg">Edit Product</h1>
          <h1
            onClick={popUp}
            className="text-gray-300 hover:text-red-400 cursor-pointer"
          >
            X
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-400 mt-2">
          <div>
            <p className="text-sm text-gray-500">Product Code</p>
            <input
              type="text"
              placeholder="test"
              className="outline p-1 outline-gray-400 text-xs rounded-sm w-full"
            />
          </div>
          <div>
            <p className="text-sm text-gray-500">Product Name</p>
            <input
              type="text"
              placeholder="tes"
              className="outline p-1 outline-gray-400 text-xs rounded-sm w-full"
            />
          </div>
        </div>
        <div className="text-right m-1">
          <button
            onClick={popUp}
            className="bg-gray-800 text-white px-2 rounded-md m-1"
          >
            Close
          </button>
          <button className="bg-green-800 text-white px-2 rounded-md m-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopUp;

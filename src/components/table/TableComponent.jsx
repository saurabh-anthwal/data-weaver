import React, { useState } from "react";

const TableComponent = ({ tableColData, data, handleShowModal }) => {
  const [current, setCurrent] = useState(1);
  const [end, setEnd] = useState(10);
  const [start, setStart] = useState(0);
  const totalPage = data.length / 10;

  function handleNumber(op) {
    if (op === "Next") {
      setCurrent(current + 1);
      setEnd(end + 10);
      setStart(start + 10);
    } else if (op === "Prev") {
      setCurrent(current - 1);
      setEnd(end - 10);
      setStart(start - 10);
    }
  }

  const ndata = data.slice(start, end);
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-200 w-full text-left">
        <thead>
          <tr className="">
            {tableColData.map((col) => (
              <th key={col.id} className="border border-slate-200 pl-3">
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 px-3 h-8">
              <input
                type="text"
                placeholder="Search Product Code"
                className="outline outline-gray-300 w-full text-xs p-1 rounded-sm"
              />
            </td>
            <td className="border border-slate-200 px-3 h-8">
              <input
                type="text"
                placeholder="Search Product Name"
                className="outline outline-gray-300 w-full text-xs p-1 rounded-sm"
              />
            </td>
            <td className="border border-slate-200 px-3 h-8">
              <button className="bg-blue-600 text-xs px-2 p-1 rounded-md text-white">
                Search
              </button>
            </td>
          </tr>
          {ndata.map((el, index) => {
            // if (el.id <= end) {
            return (
              <tr className="text-xs" key={index}>
                <td className="border border-slate-200 px-3 h-8">
                  {el.id} - {el.title}
                </td>
                <td className="border border-slate-200 px-3 h-8">{el.brand}</td>
                <td className="border border-slate-200 px-3 h-8">
                  <button className="text-blue-600" onClick={handleShowModal}>
                    Edit
                  </button>
                </td>
              </tr>
            );
            // }
          })}
        </tbody>
      </table>
      <div className="flex justify-center mt-5">
        <button
          className="px-3  outline outline-gray-200 text-green-900"
          onClick={() => handleNumber("Prev")}
        >
          Prev
        </button>
        <p className="px-2 bg-green-800 outline text-white">
          {current}/{totalPage}
        </p>
        <button
          className="px-3  outline outline-gray-200 text-green-900"
          onClick={() => handleNumber("Next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;

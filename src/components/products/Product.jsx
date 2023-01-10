import React, { useState, useEffect } from "react";
import EditPopUp from "../editPopUp/EditPopUp";
import TableComponent from "../table/TableComponent";

const tableColData = [
  {
    name: "Product Code",
    id: 1,
  },
  {
    name: "Product Name",
    id: 2,
  },
  {
    name: "Actions",
    id: 3,
  },
];

const Product = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(10);
  const [start, setStart] = useState(10);
  const [pop, setPop] = useState(false);
  useEffect(() => {
    async function abc() {
      const Uri = await fetch("https://dummyjson.com/products#");
      const json = await Uri.json();
      setData(json.products);
    }
    abc();
  }, []);

  function popUp() {
    setPop(!pop);
  }
  return (
    <div className="p-5">
      <div className="flex flex-wrap justify-between">
        <h1>products</h1>
        <div className="flex gap-4 text-xs text-white">
          <button className="bg-green-800  rounded-lg py-1 px-2">
            Add Product
          </button>
          <button className="bg-green-800  rounded-lg py-1 px-2">Import</button>
          <button className="bg-green-800  rounded-lg py-1 px-2">
            Export To Excel
          </button>
        </div>
      </div>
      <div className="mt-5">
        <TableComponent
          tableColData={tableColData}
          data={data}
          handleShowModal={popUp}
        />
      </div>

      <div>{pop ? <EditPopUp pop={pop} popUp={popUp} /> : ""}</div>
    </div>
  );
};

export default Product;

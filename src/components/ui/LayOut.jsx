import React, { Children } from "react";

const LayOut = (props) => {
  console.log(props);
  return <div className="w-3/4 m-auto">{props.children}</div>;
};

export default LayOut;

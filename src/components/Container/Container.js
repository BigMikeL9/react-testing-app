import React from "react";

const Container = (props) => {
  const classes = `py-5 ${props.className || ""}`;

  return <p className={classes}>{props.children}</p>;
};

export default Container;

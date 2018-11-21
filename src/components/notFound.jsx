import React from "react";
import NotFound404 from "../svg/404.svg";

const NotFound = () => {
  return (
    <div>
      <img src={NotFound404} className="not-found" alt="404" />
      <div className="notFound-text">Nothing around here...</div>
    </div>
  );
};

export default NotFound;

import React from "react";
//import NotFound404 from "../svg/404.svg";
import Jumbotron from "./jumbotron";

const NotFound = () => {
  return (
    <div>
      {/*<img src={NotFound404} className="not-found" alt="404" />*/}
      <Jumbotron
        coverImage={require("../img/cover1.jpg")}
        slogan="404"
        height="1500"
        strength={-1000}
      />
    </div>
  );
};

export default NotFound;

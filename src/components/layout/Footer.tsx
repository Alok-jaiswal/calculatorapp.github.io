import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="m-3">
      {/* home Img */}
      <Link to="/">
        <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-11-27/6d304110-30a8-11eb-ae9f-09e7aa62c338.jpg" alt="FOOTER Img" style={{height:"50vh" ,width:"97vw",borderRadius:"18px"}}/>
      </Link>
    </div>
  );
};

export default Footer;

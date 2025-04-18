import React from "react";
import portfolioLogo from "../assets/portfolio-logo.png";
import humanImg from "../assets/human_log.png";

export default function Logo() {
  return (
    <>
      <div className="logo-container">
        <img src={portfolioLogo} className="portfolio-logo" />
        <img src={humanImg} className="human-img" />
      </div>
    </>
  );
}

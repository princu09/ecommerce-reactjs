import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>2022 NFG All Right reserverd</p>
        <p className="icons">
          <a target="_blank" rel="noreferrer" href="//instagram.com/northfoxgroup">
            <AiFillInstagram />
          </a>
          <a target="_blank" rel="noreferrer" href="//twitter.com/northfoxgroup">
            <AiOutlineTwitter />
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;

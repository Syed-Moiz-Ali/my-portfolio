import React from "react";
import avatarr from "../../images/img1.jpg";


import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-page">
          
          <div className="svg-container">
            <svg
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              id="blob"
              className="blob-animation"
              width="500"
            >
              <rect x="0" y="0" width="900" height="600" fill="none"></rect>
              <clipPath id="shape">
                <path
                  fill="none"
                  id="blob-path"
                  className="inner-blob"
                  d="M56.6,-20.2C65.2,7.9,58.2,39.2,36.5,56.4C14.8,73.7,-21.7,76.9,-45.1,60.3C-68.5,43.7,-78.8,7.4,-69.1,-22.3C-59.4,-52.1,-29.7,-75.1,-2.8,-74.2C24.1,-73.3,48.1,-48.4,56.6,-20.2Z"
                  strok-width="7px"
                  stroke="#d1d8e0"
                  transform="translate(100 100)"
                />
              </clipPath>

              <image
                x="0"
                y="0"
                width="100%"
                clipPath="url(#shape)"
                height="100%"
                href={avatarr}
                preserveAspectRatio="none"
              ></image>
            </svg>
          </div>
          <div className="info">
            <div className="animate-text">

            <h1>
             SYED MOIZ ALI
            </h1>
            <p style={{"font-size":"15px"}} >web developer with unique designing style</p>
            <div className="social-icon">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaFacebookF />
              </a>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="http://linkn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { React } from "react";
import "./Projects.scss";
import "../../scss/Responsive.scss"
import {
  FaEye,
  FaGithub
} from "react-icons/fa";

import img1 from "../../images/port1.jpg";
import img2 from "../../images/port2.jpg";
import img3 from "../../images/port3.jpg";
import img4 from "../../images/port4.jpg";
import img5 from "../../images/port5.jpg";
import img6 from "../../images/port6.jpg";
import img7 from "../../images/port7.jpg";

const Projects = () => {
  return (
    <>
      <div className="portfolio">
        <div className="title-flex">
          <div className="left">
            <h3>Creative Portfolio</h3>
          </div>
        </div>

        <div className="animate">
          <div className="grid">
            <div className="inner-grid">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span className="overlay">
                  <img className="image set" src={img1} alt="" />
                  <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaEye className="eye-icon" />
              </a>
                  <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
             
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span className="overlay">
                  <img className="image set" src={img2} alt="" />
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon" />
                    </a> 
                    <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
              
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span className="overlay">
                  <img className="image set" src={img3} alt="" />
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon" />
                    </a>
                    <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span className="overlay">
                  <img className="image set" src={img4} alt="" />
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon" />
                    </a>
                    <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span className="overlay">
                  <img className="image set" src={img5} alt="" />
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon" />
                    </a>
                    <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span className="overlay">
                  <img className="image set" src={img6} alt="" />
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon" />
                    </a>
                    <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span class="overlay">
                  <img className="image set" src={img7} alt="" />
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon" />
                    </a>
                    <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="git-icon" />
              </a>
                </span>
              </a>

              {/* {images.map((image) => {
                return (
                  <div className="item" key={image}>
                    <img src={image} alt="" />
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

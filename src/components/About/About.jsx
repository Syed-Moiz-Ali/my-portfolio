import React from "react";
import avatar from "../../images/img1.jpg";
import "./About.scss";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="profile">
          <img src={avatar} alt="" />
    </div>
          <div className="my-data">
            <div className="about-me">
              <h1>SYED MOIZ ALI & WEB DEVELOPER</h1>
              <p>
                Hello, I am a creative web developer based in New York and happy
                to travel all over Europe to capture your big day in candid and
                authentic photos. I will create a lasting memory of the people.
              </p>
              <button className="learn-more">
              <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
                <span className="button-text">
                  Read More
                </span>
              </button>
            </div>
            <div className="address">
              <p>
                <span>Birthday:</span>
                01-08-2000
              </p>

              <br />

              <p>
                <span>Address:</span>
                19-4-370/A/100/1, Kishanbagh, Hyderabad
              </p>

              <p>
                <span>Email:</span>
                mycoding73@gmail.com
              </p>

              <p>
                <span>Study:</span>
                Lords Institute of Engineering & Technology
              </p>

              <p>
                <span>Freelance:</span>
                Available
              </p>

              
            </div>
          </div>
      </div>
    </>
  );
};

export default About;

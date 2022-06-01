import "./Contact.scss";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarked } from "react-icons/fa";
const Contact = () => {
  return (
    <>
    <div className="contact">

      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <FaMapMarked />
              <div class="topic">Address</div>
              <div class="text-one">19-4-370/A/100/1</div>
              <div class="text-two">Kishanbagh</div>
            </div>
            <div class="phone details">
              <FaPhone />
              <div class="topic">Phone</div>
              <div class="text-one">+91 897 790 4104</div>
              <div class="text-two">+91 630 171 8273</div>
            </div>
            <div class="email details">
              <FaEnvelope />
              <div class="topic">Email</div>
              <div class="text-one">mycoding73@gmail.com</div>
              <div class="text-two">smoiz2295@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form
              action="https://formsubmit.co/mycoding73@gmail.com"
              method="POST"
            >
              <div class="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="input-box message-box"></div>
              <div class="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;

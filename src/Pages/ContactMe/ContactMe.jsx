import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import SuccessNotification from "../../Components/Notification/SuccessNotification";
import FailNotification from "../../Components//Notification/FailNotification";
// import Facebook from "../../assets/Facebook.png";
import WhatApp from "../../assets/WhatApp.png";
import Github from "../../assets/Github.png";
import LinkedIn from "../../assets/LinkedIn.png";
const ContactMe = () => {
  // success or fail to delet product notifications
  const [successNotification, setSuccessNotification] = useState(null);
  const [failNotification, setFailNotification] = useState(null);
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        // service ID FROM EMAIL SERVICE / service ID FROM EMAIL SERVICE
        "service_caf1mlh",
        // template ID FROM EMAIL template / service ID FROM EMAIL SERVICE
        "template_y2om3h9",
        // public key from account / service ID FROM EMAIL SERVICE
        formRef.current,
        "I29Z7G8tFAi6eRmzN"
      );
      formRef.current.reset();
      setSuccessNotification("Your Email Has Been Sent Successfully");
      console.log("email sended successfully");
    } catch (error) {
      setFailNotification(
        "Error Sending Your Email Please Try Again Or Try later"
      );
      console.log(error);
    }
  };
  // reset notification message / reset notification message / reset notification message
  useEffect(() => {
    if (successNotification) {
      const timer = setTimeout(() => {
        setSuccessNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successNotification]);
  // if the email sending fail / if the email sending fail / if the email sending fail
  useEffect(() => {
    if (failNotification) {
      const timer = setTimeout(() => {
        setFailNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [failNotification]);
  const handleMailto = (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:lahoualiselma@gmail.com?subject=Hello%20from%20your%20App&body=I%20would%20like%20to%20contact%20you%20about%20...";
  };
  return (
    <>
      <div id="contact-me" className=" section">
        {successNotification && (
          <SuccessNotification message={successNotification} />
        )}
        {failNotification && <FailNotification message={failNotification} />}
        <div className="contactMe">
          <div className="contactMe-intro">
            <h1>Contact Me : </h1>
            <p>
              If you're interested in hiring me, collaborating on a project, or
              if you have any questions, please feel free to reach out. I'd love
              to hear from you!
            </p>
          </div>
          <form
            className="contactMe-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label>Name : </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              name="name"
            />
            <label>Email : </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              name="email"
            />
            <label>Your Message :</label>
            <textarea
              type="text"
              required
              placeholder="Please Enter your message"
              name="message"
            />
            <div className="sendEmail">
              <h3 onClick={handleMailto}>Send me email directly</h3>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h1>Email</h1>
          <p>lahoualiselma@gmail.com</p>
          <h1>Address</h1>
          <a
            href="https://maps.app.goo.gl/tpqgdJh5PTug3CcPA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bologhine,Algiers Algeria
          </a>
          <h1>Socials</h1>
          <div className="social">
            {/* <img src={Facebook} alt={Facebook} /> */}
            <img src={WhatApp} alt={WhatApp} />
            <a
              href="https://github.com/selma-lahouali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt={Github} />
            </a>
            <img src={LinkedIn} alt={LinkedIn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

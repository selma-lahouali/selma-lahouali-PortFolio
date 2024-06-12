import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import SuccessNotification from "../../Components/Notification/SuccessNotification";
import FailNotification from "../../Components//Notification/FailNotification";
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
  // if the prodcut deletion fail / if the prodcut deletion fail / if the prodcut deletion fail
  useEffect(() => {
    if (failNotification) {
      const timer = setTimeout(() => {
        setFailNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [failNotification]);
  return (
    <>
      <div id="contact-me" className=" section">
        {successNotification && (
          <SuccessNotification message={successNotification} />
        )}
        {failNotification && <FailNotification message={failNotification} />}
        <div className="contactUs">
          <div className="contactUs-intro">
            <h1>CONTACT ME : </h1>
            <p>
              If you're interested in hiring me, collaborating on a project, or
              if you have any questions, please feel free to reach out. I'd love
              to hear from you!
            </p>
          </div>
          <form
            className="contactUs-form"
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
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

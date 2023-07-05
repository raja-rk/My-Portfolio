import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n2euohl",
        "template_pwndyhg",
        form.current,
        "K4mll89olbKUasNiN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="11">
      <section className="red">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <div className="heading">
        <h1>Contact Me</h1>
      </div>
      <div className="lowerup">
      <div className="maincontact">
        <div className="myLocation">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54414.555775489134!2d75.87909308642524!3d31.526638997729684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae2d1a5455fb5%3A0x4d51e31e87ee92da!2sHoshiarpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1688209967382!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" rows="6" />
            <input type="submit" value="Send" />
          </form>
        </div>
        </div>
      
      </div>
    </div>
  );
}
export default Contact;

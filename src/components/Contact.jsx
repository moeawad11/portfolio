import React, { useState, useRef } from "react";
import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.current.user_name.value.trim())
      newErrors.name = "Name is required";
    if (!form.current.user_email.value.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.current.user_message.value.trim())
      newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contactSection" id="contact">
      <div className="contactHeader">
        <h2 className="title">Let's Connect</h2>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <div className="formGroup">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className={errors.name ? "errorInput" : ""}
          />
          {errors.name && <span className="errorMessage">{errors.name}</span>}
        </div>

        <div className="formGroup">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className={errors.email ? "errorInput" : ""}
          />
          {errors.email && <span className="errorMessage">{errors.email}</span>}
        </div>

        <div className="formGroup">
          <textarea
            name="user_message"
            placeholder="Your Message"
            rows="6"
            className={errors.message ? "errorInput" : ""}
          />
          {errors.message && (
            <span className="errorMessage">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="submitButton"
        >
          {status === "sending" ? (
            "Sending..."
          ) : (
            <>
              Send Message <FaPaperPlane />
            </>
          )}
        </button>

        {status === "success" && (
          <div className="statusMessage success">
            <FaCheckCircle /> Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="statusMessage error">
            <FaTimesCircle /> Oops! Something went wrong.
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;

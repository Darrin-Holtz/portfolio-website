
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset();
          setLoading(false);

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}  id="contact">
      <div className="cSection">
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let&apos;s keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="John Doe" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </motion.button>
          {success && <span className="successMessage">Your message has been sent! I will get back to you ASAP.</span>}
          {error && <span className="errorMessage">Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  );
};

export default Contact;

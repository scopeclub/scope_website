import "./ContactUs.css";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <motion.div
      className="contact"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "10px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      
    >
      <h1 className="c-head">
        Interested? <br />
        Let's Talk!
      </h1>
      <p className="c-para">
        Just fill this simple form in and we will contact you promptly. Hate
        forms? Drop us a line at{" "}
        <span>
          <a className="c-mail" href="mailto:scopeclub@mlrinstitutions.ac.in">
            scopeclub@mlrinstitutions.ac.in
          </a>
        </span>
      </p>
      <div className="container">
        <form action="#">
          <div class="form-row">
            <div class="input-data">
              <input type="text" name="name" required />
              <div class="underline"></div>
              <label for="">Your Name</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data">
              <input type="text" name="mail"required />
              <div class="underline"></div>
              <label for="">Your Email Address</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data textarea">
              <textarea rows="8" cols="80" name="message" required></textarea>
              <br />
              <div class="underline"></div>
              <label for="">Write your message</label>
              <br />
            </div>
          </div>
          <a href="/contact" class="btn41-43 btn-43">
            Submit
          </a>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactUs;

import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact">
      <h1 className="c-head">
        Interested? <br />
        Let's Talk!
      </h1>
      <p className="c-para">
        Just fill this simple form in and we will contact you promptly. Hate
        forms? Drop us a line at{" "}
        <span>
          <a className="c-mail" href="mailto:scopeclub@gmail.com">
            scopeclub@gmail.com
          </a>
        </span>
      </p>
      <div className="container">
        <form action="#">
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Your Name</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Your Email Address</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
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
    </div>
  );
}

export default ContactUs;

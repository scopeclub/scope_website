import React from "react";
import "./AppFiesta.css";
import Qr from "../Assets/qrcode.jpg";

function AppFiesta() {
  return (
    <div className="AppFiesta">
      <div className="event">
        <h1>APPFIESTA</h1>
        <img src={Qr} alt="qr" id="qr" />
        <p>UPI Phone Number: 9603166060</p>
        <div className="eve-content">
          <h2>
            Scan here to get ready with your team
            <br /> and take part in APPFIESTA!
          </h2>
          <h4>Team size - Amount</h4>
          <h4> 3 - Rs.1110/-</h4>
          <h4> 4 - Rs.1480/-</h4>
          <h3>
            Note: Please make sure to note
            <br /> the Transaction ID for filling the form.
          </h3>
        </div>
      </div>
      <div className="iframe-container">
        <iframe
          title="AppFiesta"
          src="https://lu.ma/embed-checkout/evt-S6fBq7jBakEELUC"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default AppFiesta;

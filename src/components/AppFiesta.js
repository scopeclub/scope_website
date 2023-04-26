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
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Team Size</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>Rs 1110/-</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Rs 1480/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="responsive-container">
            <div>
              <h1>Team Size</h1>
              <h2>3</h2>
              <h1>Amount</h1>
              <h2>Rs 1110/-</h2>
            </div>
            <div>
              <h1>Team Size</h1>
              <h2>4</h2>
              <h1>Amount</h1>
              <h2>Rs 1450/-</h2>
            </div>
          </div>
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

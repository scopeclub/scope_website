import React from "react";
import "./AppFiesta.css";
import qr from '../Assets/qrcode.jpg'
function AppFiesta() {
  return (
    <div className="AppFiesta">
        
      <div className="event">
        <h1>App Fiesta</h1>
        <div></div>
        <p>Bootcamp + Hackathon</p>
        <img src={qr} />
        <p>UPI Phone Number: 9603166060</p>
        <p>Scan here to get ready with your team and take part in APPFIESTA!!</p>
        <h4>Team size - Amount</h4>
        <h5>  3       - Rs.1110/-</h5>
        <h5>  4       - Rs.1480/-</h5>
        <p>Note:PLease make sure to note the Transaction ID for filling the form.</p>

      </div>
      <iframe
        title="AppFiesta"
        src="https://lu.ma/embed-checkout/evt-eZEXm3GQlkBopdT"
        width="1000"
        height="500"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

export default AppFiesta;

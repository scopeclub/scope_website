import React from "react";
import "./AppFiesta.css";
import qr from '../Assets/qr.jpg'
function AppFiesta() {
  return (
    <div className="AppFiesta">
        
      <div className="event">
        <h1>App Fiesta</h1>
        <p>Bootcamp + Hackathon</p>
        <p class='qrd'>
          Scan here to get ready with your team and take part in
          the APP-FIESTA.<br></br>
          Note:Please make sure to note the transaction id before
          registering.<br></br>
          <img src={qr} className="qrcode"/>
          <br></br>
          Team lead can pay for the whole team while making payment.
          
          Mobile No.:9603166060<br></br>
          Registration fee- Rs.370/- per head<br></br>
          For more details Contact:
          <h3>phoneno.1</h3>
          <h3>phoneno.2</h3>
        </p>

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

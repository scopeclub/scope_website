import React from "react";
import "./AppFiesta.css";

function AppFiesta() {
  return (
    <div className="AppFiesta">
        
      <div className="event">
        <h1>App Fiesta</h1>
        <p>Bootcamp + Hackathon</p>
       
      </div>
      <iframe
        title="AppFiesta"
        src="https://lu.ma/embed-checkout/evt-eZEXm3GQlkBopdT"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

export default AppFiesta;

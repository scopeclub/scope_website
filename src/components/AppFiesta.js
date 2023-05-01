import React from "react";
import "./AppFiesta.css";
import { motion } from "framer-motion";

function AppFiesta() {
  return (
    <motion.div className="AppFiesta"
    initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "20px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}>
      <div className="event">
        <h1>#APPFIESTA</h1>
      </div>
      <div className="iframe-container">
        <iframe
          title="AppFiesta"
          src="https://embed.lottiefiles.com/animation/96375"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default AppFiesta;


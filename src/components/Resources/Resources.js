import "./Resources.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Resources() {
  return (
    <motion.div
      className="g-body"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "20px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Growth Factor</title>
      </Helmet>
      <div class="container">
        <h1 class="titlee">Gd To!</h1>

        
      </div>

    </motion.div>
  );
}

export default Resources;

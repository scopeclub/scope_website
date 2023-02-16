import "./Home.css";
import { motion } from "framer-motion";
import ParticleBackground from "../ParticleBackground";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "20px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      <h1 className="home-h">We are Scope Club.</h1>
    </motion.div>
  );
}

export default Home;

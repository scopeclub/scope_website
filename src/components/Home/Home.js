import "./Home.css";
import { motion } from "framer-motion";
import Header from "./Homecomp/Header";
import Aboutus from "./Homecomp/Aboutus";
import Wdwd from "./Homecomp/Wdwd";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="aboutus">
        <Aboutus />
        <Wdwd />
      </div>
    </motion.div>
  );
}

export default Home;

import Home from "./Home/Home";
import Events from "./Events/Events";
import ContactUs from "./ContactUs/ContactUs";
import Gallery from "./Gallery/Gallery";
import Team from "./Team/Team";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

import "./Aboutus.css";
import aboutus from "../.././../Assets/aboutus.jpg";
function Aboutus() {
  return (
    <div className="about">
      <h1 className="headd">ABOUT US</h1>
      <div className="row">
        <div className="right">
          <div className="content">
            <p>
              SCOPE club is the technical club of MLRIT that has the motto to
              instill a coding culture, collaborate, and arrange events relevant
              to Open Source, Game Development, Web Development, App
              Development, and many other topics. Many students at the institute
              are doing well, but they can do even more if they get proper
              guidance. These students invariably maintain contact with a select
              lot of elite, wise seniors who act as mentors or friends. The
              purpose of SCOPE club is to provide an official platform for these
              efforts to encourage them by officially endorsing them and helping
              them surmount the hostel boundaries for a healthier and fruitful
              network.
            </p>
          </div>
        </div>

        <div className="left">
          <img src={aboutus} alt="aboutus" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

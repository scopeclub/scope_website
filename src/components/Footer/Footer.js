import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer">
      <div class="containerr">
        <div class="row">
          <div class="footer-col">
            <h4>Write</h4>
            <ul>
              <li>
                <a href="mailto:scopeclub@mlrinstitutions.ac.in">
                  scopeclub@mlrinstitutions.ac.in
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Meet</h4>
            <p>
              MLRIT,
              <br />
              Dundigal Police Station Road,
              <br />
              Hyderabad – 500 043,
              <br />
              Telangana, India.
            </p>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <FaTwitter size="30px" style={{ margin: "10px", cursor: "pointer" }} />
            <FaInstagram  size="30px"style={{ margin: "10px", cursor: "pointer" }} />
            <FaLinkedin  size="30px" style={{ margin: "10px", cursor: "pointer" }}/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

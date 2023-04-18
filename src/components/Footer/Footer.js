import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer">
      <div class="containerr">
        <div class="roww">
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
              MT 003-SCOPE CLUB,MLRIT,
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
            <a href="https://twitter.com/MlritScope" target="_blank"><FaTwitter size="30px" style={{ margin: "10px", cursor: "pointer" }} /></a>
            <a href="https://www.instagram.com/mlrit_scope" target="_blank"><FaInstagram  size="30px"style={{ margin: "10px", cursor: "pointer" }} /></a>
            <a href="https://www.linkedin.com/in/scope-club-mlrit-9017541a3/?trk=public_profile_browsemap&originalSubdomain=in" target="_blank"><FaLinkedin  size="30px" style={{ margin: "10px", cursor: "pointer" }}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

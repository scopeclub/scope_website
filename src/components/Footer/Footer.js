import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="containerr">
        <div class="roww">
          <div class="footer-col">
            <h4>Write</h4>
            <ul>
              <li>
                <a href="#">scopeclub@mlrinstitutions.ac.in</a>
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
            <div class="social-links">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

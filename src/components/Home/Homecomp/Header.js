import "./Header.css";

function Header() {
  return (
    <div className="container-particle">
      <div class="blobs" role="presentation">
        <div class="blob-rotate">
          <div class="blob-move">
            <div class="blob"></div>
          </div>
        </div>
        <div class="blob-rotate">
          <div class="blob-move">
            <div class="blob"></div>
          </div>
        </div>
        <div class="blob-rotate">
          <div class="blob-move">
            <div class="blob"></div>
          </div>
        </div>
      </div>
      <div className="headerr">
      <p className="text--glitch" data-text="WE ARE SCOPE CLUB." >
        WE ARE SCOPE CLUB.
      </p>
      </div>
    </div>
  );
}

export default Header;

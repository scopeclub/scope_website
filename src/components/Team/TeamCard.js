import "./TeamCard.css";
import "@lottiefiles/lottie-player";

function TeamCard(props) {
  return (
    <div class="profile-card">
      <div class="img">
        <img src={props.image} alt="profile_pic" oncontextmenu="return false" />
      </div>
      <div class="caption">
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <div class="social-links">
          <a href={props.git} target="_blank" rel="noreferrer">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_cwqf5i6h.json"
              background="transparent"
              speed="1"
              style={{ width: 60, height: 60 }}
              loop
              autoplay
            ></lottie-player>
          </a>
          <a href={props.insta} target="_blank" rel="noreferrer">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_2ks3pjua.json"
              background="transparent"
              speed="1"
              style={{ width: 60, height: 60 }}
              loop
              autoplay
            ></lottie-player>
          </a>
          <a href={props.li} target="_blank" rel="noreferrer">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_0Cm1Y2.json"
              background="transparent"
              speed="1"
              style={{ width: 50, height: 50 }}
              loop
              autoplay
            ></lottie-player>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

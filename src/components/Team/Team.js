import "./Team.css";
import { bod } from "../../Assets/Data/TeamData";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="team">
      <div className="head">
        <h1 className="team-h">Meet the Team!</h1>
        <h3 className="team-q">
          "Coming together is a beginning, staying together is progress, and
          working together is success."
          <br />– Henry Ford
        </h3>
        <h2 className="team-p">Board of Directors</h2>

        <div className="bod">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k24</h2>
        <div className="bod">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k23</h2>
        <div className="bod">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k25</h2>
        <div className="bod">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;

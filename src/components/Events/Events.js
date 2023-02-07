import "./Events.css";
import EventCard from "./EventCard";
import ed from "../../Assets/Data/EventData.json";
import { useState } from "react";
import { Grid } from "@mui/material";


function Events() {
  const [event, setEvent] = useState(ed);
  const filterItem = (categItem) => {
    const updatedItems = ed.filter((eve) => {
      return eve.status === categItem;
    });
    setEvent(updatedItems);
  };

  return (
    <div className="Events">
      <div className="events-h">
        <h3 class="animate-charcter">Our Events</h3>
      </div>

      <div className="but">
        <a onClick={() => filterItem("0")} class="btn41-44 btn-41">
          Past Events
        </a>
        <a onClick={() => filterItem("1")} class="btn41-45 btn-41">
          Upcoming Events
        </a>
      </div>

      <Grid
        container
        spacing={1}
        justifyContent="center"
        rowGap={8}
        marginTop="30px"
      >
        {event.map((e) => (
          <Grid item xs={12} sm={7} md={5} lg={4} key={e.id}>
            <EventCard
              key={e.id}
              title={e.title}
              date={e.date}
              time={e.time}
              venue={e.venue}
              image={e.image}
              desc={e.description}
              extras={e.extras}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Events;

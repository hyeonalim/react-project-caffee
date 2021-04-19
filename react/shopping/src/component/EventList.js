import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function EventList() {
    const events = useFetch('http://localhost:3001/events');

    return (
      <>
        <ul className="list_event">
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              <img src={`${event.img}`}></img>
            </Link>
                {event.start} ~ {event.end}
                <p>{event.ing}</p>
          </li>
        ))}
      </ul>
      </>
    );
}
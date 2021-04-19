import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import EventInfo from "./EventInfo";

export default function Item(){
    const {id}= useParams();

    const event_info = useFetch(`http://localhost:3001/event_info?id=${id}`);

    return( 
    <>
    <h2>Event {id}</h2>
    <table>
        <tbody>
            {event_info.map(info => (
                <EventInfo event_info={info} key={info.id}/>
            ))}
        </tbody>
    </table>
    </>
    );
}
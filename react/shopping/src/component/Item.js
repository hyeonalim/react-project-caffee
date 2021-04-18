import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import Info from "./Info";

export default function Item(){
    const {no}= useParams();

    const infos = useFetch(`http://localhost:3001/infos?no=${no}`);

    return( 
    <>
    <h2>Item {no}</h2>
    <table>
        <tbody>
            {infos.map(info => (
                <Info info={info} key={info.id}/>
            ))}
        </tbody>
    </table>
    </>
    );
}
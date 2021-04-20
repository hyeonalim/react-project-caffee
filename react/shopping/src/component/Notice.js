import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import Noticeinfo from "./Noticeinfo";

export default function Notice(){

    const notices = useFetch(`http://localhost:3001/notices`);

    return( 
    <>
    <h2>Notice</h2>
    <table>
        <tbody>
            {notices.map(notice => (
                <Noticeinfo notice={notice} key={notice.id}/>
            ))}
        </tbody>
    </table>
    </>
    );
}

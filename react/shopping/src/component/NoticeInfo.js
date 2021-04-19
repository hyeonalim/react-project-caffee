import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function NoticeInfo() {
    const { id } = useParams();

    const notices = useFetch(`http://localhost:3001/notices?id=${id}`);
    const infos = useFetch(`http://localhost:3001/notices_info?id=${id}`);

    return (
        <>
            <h2>Notice {id}</h2>
            <table>
                <tbody>

                    {notices.map(notice => (
                        <li key={notice.id}>
                            <h1>{notice.name}</h1>
                        </li>
                    ))}

                    {infos.map(info => (
                        <li key={info.id}>
                            <p>{info.info}</p>
                        </li>
                    ))}
                </tbody>
            </table>
        </>
    );
}
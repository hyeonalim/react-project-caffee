import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Notice() {
    const notices = useFetch('http://localhost:3001/notices');

    return (
      <>
      <ul className="list_notice">
        {notices.map(notice => (
          <li key={notice.id}>
            <Link to={`/notice/${notice.id}`}>
                {notice.name}
            </Link>
          </li>
        ))}
        </ul>
      </>
    );
}
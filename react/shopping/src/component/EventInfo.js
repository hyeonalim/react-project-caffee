import useFetch from "../hooks/useFetch";
import { useState } from "react"
import { useParams } from "react-router-dom";
import Commant from "./Comment";

export default function EventInfo({ event_info: inf }) {
  const [event_info, setEventInfo] = useState(inf);
  const { id } = useParams();
  const [isShow, setIsShow] = useState(false); // 댓글창 보이기
  const cmts = useFetch(`http://localhost:3001/event_cmt?id=${id}`);

//댓글창 보이기
  function toggleShow(){
    setIsShow(!isShow);
}

  return (
    <div>
        <h2>{event_info.name}</h2>

        <div className="event_info">
        <div className="event_img">
            <img src={`${event_info.img}`}/>
        </div>
        <div className="event_text">{event_info.info}</div>
      </div>
      <div className="cmt_title">
        <h3>Commant</h3>
        </div>
        {cmts.map(cmt => (
            <div className="cmt_cmts">
            <ul>
            <li className="id">{cmt.user_id}</li>
            <li className="cmt">: {cmt.cmt}</li>
            </ul>
            </div>
          ))}

      {isShow && <Commant/>}
      <div className="move_btn">
          <a href="/menu_event">뒤로가기</a>
          <a href="/">Home</a>
          <button onClick={toggleShow}>Commant</button>
      </div>
    </div>
  )
}

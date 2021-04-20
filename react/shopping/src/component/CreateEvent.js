//이벤트 만들기
import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";
import Create from "./Create";

export default function CreateEvent() {
    const events = useFetch("http://localhost:3001/events");
    const event_info = useFetch("http://localhost:3001/event_info");
    const history = useHistory();

    function addEvent(e) {
        fetch('http://localhost:3001/events/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                no: events.length + 1,
                start: startRef.current.value,
                end: endRef.current.value,
                img: bimgRef.current.value,
                ing: ingRef.current.value
            }),
        });

        fetch('http://localhost:3001/event_info', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                no: events.length + 1,
                name: nameRef.current.value,
                img: infoimgRef.current.value,
                info: infoRef.current.value
            }),
        }).then(res => {
            if (res.ok) {
                alert('새로운 이벤트를 등록하였습니다.');
            }
        });
    }

    const startRef = useRef(null);
    const endRef = useRef(null);
    const bimgRef = useRef(null);
    const ingRef = useRef(null);

    const nameRef = useRef(null);
    const infoimgRef = useRef(null);
    const infoRef = useRef(null);
    
    return (
        <div>
            <div>
                <Create />
            </div>
            <div className="event">
                <div className="event_home">
                    <li>이벤트이미지 URL</li>
                    <li><input type="text" placeholder="이벤트이미지url" ref={bimgRef} /></li>
                    <li>이벤트시작날짜</li>
                    <li><input type="text" placeholder="이벤트시작날짜" ref={startRef} /></li>
                    <li>이벤트마지막날짜</li>
                    <li><input type="text" placeholder="이벤트마지막날짜" ref={endRef} /></li>
                    <li>이벤트진행중</li>
                    <li><input type="text" placeholder="이벤트진행중" ref={ingRef} /></li>
                </div>
                <div className="event_info">
                    <li>이벤트명</li>
                    <li><input type="text" placeholder="이벤트명" ref={nameRef} /></li>
                    <li>이벤트상세이미지URL</li>
                    <li><input type="text" placeholder="이벤트상세이미지URL" ref={infoimgRef} /></li>
                    <li>이벤트상세설명</li>
                    <li><input type="text" placeholder="이벤트상세설명" ref={infoRef} /></li>
                </div>
            </div>
            <div className="button">
            <button onClick={addEvent}>이벤트추가</button>
            <a href="/menu_event" className="link">취소</a>
            </div>
        </div>
    )
}
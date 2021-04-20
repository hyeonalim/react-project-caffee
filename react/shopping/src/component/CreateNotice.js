//공지사항 만들기
import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";
import Create from "./Create";

export default function CreateNotice() {
    const notices = useFetch("http://localhost:3001/notices");
    const history = useHistory();

    function addNotice(e) {
        fetch('http://localhost:3001/notices/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: notices.length + 1,
                name: nameRef.current.value,
                info: infoRef.current.value,
            }),
        }).then(res => {
            if (res.ok) {
                alert('공지사항이 등록되었습니다.');
                history.push(`/menu_notice`)
            }
        });
    }

    const nameRef = useRef(null);
    const infoRef = useRef(null);

    return (
        <div>
            <div>
                <Create />
            </div>
            <div className="info">
                <ul>
                <div className="info_item img">
                    <li>공지사항 제목</li>
                    <li><input type="text" placeholder="공지사항 제목" ref={nameRef} /></li>
                    <li>공지사항 상세</li>
                    <li><input type="text" placeholder="공지사항 상세" ref={infoRef} /></li>
                </div>
                </ul>
            </div>
            <div className="button">
            <button onClick={addNotice}>공지사항추가</button>
            <a href="/" className="link">취소</a>
            </div>
        </div>
    )
}
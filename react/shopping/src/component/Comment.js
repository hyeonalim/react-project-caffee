//코멘트 작성하기
import { useRef } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Comment() {
    const { id } = useParams();
    const eventcmts = useFetch("http://localhost:3001/event_cmt");
    
    function addCmt(e) {
        fetch('http://localhost:3001/event_cmt/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: eventcmts.length-1,
                user_id: uidRef.current.value,
                user_pwd: upwdRef.current.value,
                cmt: cmtRef.current.value
            }),
        }).then(res => {
            if (res.ok) {
                alert('댓글이 등록되었습니다.');
            }
        });
    }

    const uidRef = useRef(null);
    const upwdRef = useRef(null);
    const cmtRef = useRef(null);

    return (
        <div>
            <div className="input_area">
                <label>ID</label>
                <input type="text" placeholder="아이디" ref={uidRef} />
            </div>
            <div className="input_area">
                <label>PWD</label>
                <input type="text" placeholder="비밀번호" ref={upwdRef} />
            </div>
            <div className="input_area">
                <label>코멘트</label>
                <input type="text" placeholder="코멘트" ref={cmtRef} />
            </div>

            <button onClick={addCmt}>댓글추가</button>

        </div>
    )
}
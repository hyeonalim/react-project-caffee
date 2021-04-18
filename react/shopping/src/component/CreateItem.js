//아이템 만들기
import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateItem() {
    const items = useFetch("http://localhost:3001/items");
    const history = useHistory();

    function addItem(e) {
        fetch('http://localhost:3001/items/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                no: items.length + 1,
                name: nameRef.current.value,
                img: imgRef.current.value,
            }),
        }).then(res => {
            if (res.ok) {
                alert('생성이 완료되었습니다.');
                history.push(`/`)
            }
        });

        fetch('http://localhost:3001/infos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                no: items.length + 1,
                eng: engRef.current.value,
                kor: korRef.current.value,
                price: priceRef.current.value,
                isDone: false,
            }),
        }).then(res => {
            if (res.ok) {
                alert('새로운 상품을 등록하였습니다.');
            }
        });
    }

    const nameRef = useRef(null);
    const imgRef = useRef(null);

    const engRef = useRef(null);
    const korRef = useRef(null);
    const priceRef = useRef(null);

    return (
        <div>
            <div className="input_area">
                <label>상품명</label>
                <input type="text" placeholder="상품명" ref={nameRef} />
            </div>
            <div className="input_area">
                <label>상품이미지 URL</label>
                <input type="text" placeholder="상품이미지url" ref={imgRef} />
            </div>


            <div className="input_area">
                <label>상품명</label>
                <input type="text" placeholder="상품명" ref={engRef} />
            </div>
            <div className="input_area">
                <label>상품설명</label>
                <input type="text" placeholder="상품설명" ref={korRef} />
            </div>
            <div className="input_area">
                <label>가격</label>
                <input type="text" placeholder="가격" ref={priceRef} />
            </div>

            <button onClick={addItem}>상품추가</button>
            <a href="/" className="link">취소</a>

        </div>
    )
}

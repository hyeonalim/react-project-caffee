import useFetch from "../hooks/useFetch";
import { useState,useRef } from "react"
import { useParams } from "react-router-dom";

export default function Info({ item: itm }) {
  //정보 데이터 가져오기
  const [item, setItem] = useState(itm);

  //수정 입력 필드 보이기
  const [isShow1, setIsShow1] = useState(false);

  //아이콘 이미지
  const iconimg = useFetch("http://localhost:3001/iconimg");
  
  function toggleShow() {
      setIsShow1(!isShow1);
  }

  //아이템 수정
  function UpdateItem(e) {
    fetch('http://localhost:3001/items/', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: nameRef.current.value,
            info: infoRef.current.value,
            price: priceRef.current.value,
            img: imgRef.current.value
        }),
    }).then(res => {
        if (res.ok) {
            alert('상품이 수정되었습니다.');
        }
    });
}

const nameRef = useRef(null);
const infoRef = useRef(null);
const priceRef = useRef(null);
const imgRef = useRef(null);

  //아이템의 정보 보여주기
  return (
    <>
    <div class="modal">
    <label class="modal_bg" for="open-pop"></label>
  <div class="modal_inner">
    <label class="modal_close" for="open-pop"></label>
    <div>

<div className="info">
        <div className="info_item img">
            <img src={`${item.img}`}></img>
        </div>
        <div className="info_item text">
          <ul>
            <li>{item.name}</li>
            <li>{item.info}</li>
            <li>{item.price}</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="update_btn">
    <button onClick={toggleShow}>수정</button>
    </div>
    {isShow1 && 
    
    <div className="info">
        <div className="info_item img">
        <div className="input_area">
                <select ref={imgRef}>
                {iconimg.map(img => (
                    <option key={img.id} value={img.img}><img src={`${img.img}`}/></option>
                ))}
            </select>
            </div>
        </div>
        <div className="info_item text">
          <ul>
          <div className="input_area">
            <li><input type="text" placeholder={item.name} ref={nameRef} /></li>
          </div>
          <div className="input_area">
                <li><input type="text" placeholder={item.info} ref={infoRef} /></li>
            </div>
            <div className="input_area">
                <li><input type="text" placeholder={item.price} ref={priceRef} /></li>
            </div>
          </ul>
        </div>
            <button onClick={UpdateItem}>상품 업데이트</button>
    </div>
    }
    </div>
    </div>
    </>
  )
}

import useFetch from "../hooks/useFetch";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function Info({ item: itm }) {
  //정보 데이터 가져오기
  const [item, setItem] = useState(itm);

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
      <div>
        <img src={item.img}></img>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

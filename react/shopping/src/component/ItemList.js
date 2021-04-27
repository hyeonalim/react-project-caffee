import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import Info from "./Info";

export default function ItemList() {
      //아이템 데이터 가져오기
      const items = useFetch('http://localhost:3001/items');
  
      //아이템 버튼 하나씩 노출
      return (
        <>
          <ul className="list_day">
          {items.map(item => (
            <>
                <Info item={item} key={item.id}/>
                <li>
                <div>
                <p><label class="btn" for="open-pop">
                
                  <img src={`${item.img}`}></img>
                  {item.name}
                
                </label></p>
                </div>
                </li>
                <input class="modal-state" id="open-pop" type="checkbox" />    
                               
                </>
              ))}
        </ul>
        </>
      );
  }

import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function ItemList() {
    const items = useFetch('http://localhost:3001/items');
    let cnt = 0;

    return (
      <>
        <ul className="list_day">
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.no}`}>
              <img src={`${item.img}`}></img>
              {item.name}
              </Link>
            <button onClick={()=>{
              (cnt)=(cnt)-1;
            }}>-</button>
            {cnt}
             <button onClick={()=>{
              cnt=cnt+1;
            }}>+</button>
          </li>
        ))}
      </ul>
      <a href="/order" className="link">구매하기</a>
      </>
    );
}
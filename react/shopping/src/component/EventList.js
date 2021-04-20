import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function ItemList() {
    const items = useFetch('http://localhost:3001/items');

    return (
      <>
        <ul className="list_day">
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.no}`}>
              <img src={`${item.img}`}></img>
              {item.name}
              </Link>
          </li>
        ))}
      </ul>
      </>
    );
}

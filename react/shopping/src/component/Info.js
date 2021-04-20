import useFetch from "../hooks/useFetch";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function Info({ info: inf }) {
  const [info, setInfo] = useState(inf);
  const { no } = useParams();
  const items = useFetch(`http://localhost:3001/items?no=${no}`);

  return (
    <div>
      <div className="info">
        <div className="info_item img">
          {items.map(item => (
            <img src={`${item.img}`}></img>
          ))}
        </div>
        <div className="info_item text">
          <ul>
            <li>{info.eng}</li>
            <li>{info.kor}</li>
            <li>{info.price}</li>
          </ul>
        </div>
      </div>
      <div>
        <img src={info.img}></img>
      </div>
    </div>
  )
}


/*import { useState } from "react"

export default function Info({ info: inf }) {
    const [info, setInfo] = useState(inf);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(info.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone() {
        fetch(`http://localhost:3001/infos/${info.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...info,
            isDone: !isDone,
          }),
        }).then(res => {
          if (res.ok) {
            setIsDone(!isDone);
          }
        });
      }

      function del(){
          if(window.confirm('삭제하시겠습니까?')){
              fetch(`http://localhost:3001/infos/${info.id}`,{
                  method : 'DELETE',
              }).then(res =>{
                if (res.ok) {
                    setInfo({id:0});
                  }
              });
          }
      }

      if(info.id==0){
          return null;
      }

    return (

        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone}
                onChange={toggleDone}/>
            </td>
            <td>{info.eng}</td>
            <td>{isShow && info.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻보기</button>
                <button onClick={del} class="btn_del">삭제</button>
            </td>
        </tr>
    )
}*/

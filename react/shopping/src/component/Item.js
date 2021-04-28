import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import Info from "./Info";

export default function Item(){
    //각 아이템의 번호 가져오기
    const {no}= useParams();

    //각 아이템의 정보 가져오기
    const items = useFetch(`http://localhost:3001/items?no=${no}`);

    //아이템 정보 나열하기
    return( 
    <>
    <h2>Item {no}</h2>
    <table>
        <tbody>
            {items.map(item => (
                <Info item={item} key={item.id}/>
            ))}
        </tbody>
    </table>
    </>
    );
}

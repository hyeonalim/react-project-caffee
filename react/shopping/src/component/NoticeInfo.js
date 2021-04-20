import { useState } from "react"

export default function Noticeinfo({ notice: n }) {
    const [notice, setNotice] = useState(n);
    const [isShow, setIsShow] = useState(false);

    function toggleShow() {
        setIsShow(!isShow);
    }

    return (
        <div className="list_notice">
            <li><button onClick={toggleShow}>{notice.name}</button></li>
            {isShow && notice.info}
        </div>
    );
}

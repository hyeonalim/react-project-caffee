import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">Shop</Link>
            </h1>
            <div className="menu">
                <a href="/create" className="link">추가하기</a>
            </div>
            <div className="sidemenu">
                <a href="/menu_introduce" className="link">소개</a>
                <a href="/menu_item" className="link">상품</a>
                <a href="/menu_event" className="link">이벤트</a>
                <a href="/menu_notice" className="link">공지사항</a>
            </div>
        </div>
    );
}

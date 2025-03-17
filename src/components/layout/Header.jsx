// import "./styles.css";

export default function Header() {
    return (
        <header className="headerWrapper">
            <div className="logo">Logo</div>
            <nav>
                <ul className="navMenu">
                    <li className="navItem">
                        <a href="#">메뉴1</a>
                    </li>
                    <li className="navItem">
                        <a href="#">메뉴2</a>
                    </li>
                    <li className="navItem">
                        <a href="#">메뉴3</a>
                    </li>
                    <li className="navItem">
                        <a href="#">메뉴4</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

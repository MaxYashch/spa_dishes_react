function Header() {
    return (
        <nav className="blue darken-2">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    SPA Dishes
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
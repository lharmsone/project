import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">ZEN Chill</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/articles" className="nav-link">Articles</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/chat" className="nav-link">Chat</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
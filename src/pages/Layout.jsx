import { Outlet, Link } from "react-router-dom";
import '../pages/layout.css';

function Layout() {
    return (
        <div className="bar-content">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/" className="home-bar">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>    
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <button type="button" className="bttn-cv">Download CV</button>
                </ul>
            </nav>
            <Outlet />
        </div>
    );  
}   

export default Layout;
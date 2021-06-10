import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <span className="navbar-brand">Routing</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav ms-auto">
            <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/signin" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
        </ul>

    </nav>);
}

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [showCartProducts, setShowCartProducts] = useState(false)
    return (<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-2">
        <a className="navbar-brand" href="#">Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"
                        onClick={() => setShowCartProducts(!showCartProducts)}>
                        Cart<sup>{props.cartCount}</sup></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
        {showCartProducts && props.cartProducts.length &&
            props.cartProducts.map(({ name, quantity }) =>
                <div style={{ color: "white" }}>
                    <h1>{name}</h1>
                    <h2>Quantity - {quantity}</h2>
                </div>
            )}
    </nav >);
}

export default Navbar;
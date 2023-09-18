import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header>
                <div className="Header-container">

                    <div className="logo-container">
                        <h3 className="logo"><Link to="/">Tech<span>Wave</span></Link></h3>
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link">
                                    <Link to="/Store">Store</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/About">About</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="log-search">
                        <input type="text" className="btn-search" placeholder="search" />
                        <Search color="black" size={20} />
                    </div>
                    <div className="log-sign">
                        <div>
                            <button className="btn">Sign up</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
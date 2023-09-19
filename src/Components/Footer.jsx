import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="Main-Footer-Container">
                    <div className="company-container-footer">
                        <h3 className="logo"><a href="/">Tech<span>Wave</span></a></h3>
                        <br />
                        <p>TechWave is a website that provides news, reviews, and buying guides for
                            tech devices. It covers a wide range of devices, including smartphones,
                            tablets, laptops, TVs, cameras, and more. TechRadar also has a section
                            dedicated to how-tos, which helps users get the most out of their tech
                            devices.
                        </p>
                        <hr />
                        <p>Copyright &copy; 2023 All Right's Reserved</p>
                    </div>
                    <div className="All-Information-Container">
                        <h3>Informative Links</h3>
                        <ul>
                            <li className="nav-link-footer">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-link-footer">
                                <Link to="/Store">Store</Link>
                            </li>
                            <li className="nav-link-footer">
                                <Link to="/About">About</Link>
                            </li>
                            <li className="nav-link-footer">
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="About-Container">
                        <h3>About Us</h3>
                        <p>We are a tech website dedicated to providing our readers with the
                            latest news, reviews, and insights on the latest technologies.
                            We are passionate about technology and we believe that it has the
                            power to change the world. We strive to provide our readers with
                            accurate and unbiased information so that they can make informed
                            decisions about the technologies that they use.</p>
                    </div>
                </div>
            </footer >
        </>
    )
}
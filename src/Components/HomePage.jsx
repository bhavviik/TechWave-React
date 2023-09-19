import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Store from "./Store";
import About from "./About";

function HomePage() {
    const navigate = useNavigate();
    const browsOnClick = () => {
            navigate("/Store")
    }
    const aboutOnClick = () => {
        navigate("/About")
}
    return (
        <>
            <div className="Main-Container">
                <div className="Main-Container-content">

                    <h2>High-quility tech gedget & accessory</h2>
                    <p><b>Find tech products that simplify your life, save<br /> your time, and make you more productive</b></p>

                    <div className="Content-Buttons">
                        <button className="btn" onClick={browsOnClick}>Brows Products</button>
                        <button className="btn" onClick={aboutOnClick}>About Us</button>
                    </div>
                    <Routes>
                        <Route path="/Store" element={<Store />}></Route>
                        <Route path="/About" element={<About />}></Route>
                    </Routes>
                </div>

            </div>
            <div className="Main-Explore-Container">
                <div className="Explore-Container">
                    <div className="First-Explore-Container">
                        <div className="Explore-Tech">
                            <h2>Technology</h2>
                            <p>Tech products that designed and builds innovative <br />
                                which are consistently rated above the competition.</p>
                            <Link to="/Store"><b>Explore Product</b><Icon.ArrowRight /></Link>
                        </div>
                        <div className="Explore-Gear">
                            <h2>Gear</h2>
                            <p>Tech products that designed and builds innovative <br />
                                which are consistently rated above the competition.</p>
                            <Link to="/Store"><b>Explore Product</b><Icon.ArrowRight size={17} /></Link>
                        </div>
                    </div>
                    <div className="Second-Explore-Container">
                        <div className="Explore-Gear2">
                            <h2>Gear</h2>
                            <p>Tech products that designed and builds innovative <br />
                                which are consistently rated above the competition.</p>
                            <Link to="/Store"><b>Explore Product</b><Icon.ArrowRight size={17} /></Link>
                        </div>
                        <div className="Explore-Accessory">
                            <h2>Accessory</h2>
                            <p>Tech products that designed and builds innovative <br />
                                which are consistently rated above the competition.</p>
                            <Link to="/Store"><b>Explore Product</b><Icon.ArrowRight size={17} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-store-div">
                <div className="store-header">
                    <h3>Store</h3>
                </div>
                <div className="Store-Item-Categories">
                    <input type="button" className="store-all-button" value="All" />
                    <input type="button" className="store-gear-button" value="Gear" />
                    <input type="button" className="store-technology-button" value="Technology" />
                    <input type="button" className="store-Accessory-button" value="Accessory" />
                </div>
            </div>
            <div className="Store-Item">
                <div className="Store-Item-card-1">
                    <input type="text" placeholder="Accessory" readOnly={true} />

                    <div className="Item-Card-Desc">
                        <p><b>Airbnb AirTag</b></p>
                        A physical or digital label that helps guests identify and book your Airbnb
                        listing. These tags can be used on Airbnb, social media, and other online
                        channels to promote your listing and track its performance.
                        <input type="button" value="₹ 3500 INR" />
                    </div>
                </div>
                <div className="Store-Item-card-2">
                    <input type="text" placeholder="Gear" readOnly={true} />
                    <div className="Item-Card-Desc">
                        <p><b>Behance Water-Bottle</b></p>
                        A digital water bottle is a smart water bottle that has a built-in display
                        that shows the temperature of the water. It can also track your water
                        intake and remind you to drink more water.
                        <input type="button" value="₹ 5500 INR" />
                    </div>
                </div>
                <div className="Store-Item-card-3">
                    <input type="text" placeholder="Technology" readOnly={true} />
                    <div className="Item-Card-Desc">
                        <p><b>Melodic Majesty</b></p>
                        Headphones are a pair of audio devices that fit over the ears and deliver
                        sound directly to the listener's ears. They are used to listen to music,
                        watch movies, play games, and make phone calls.
                        <input type="button" value="₹ 6500 INR" />
                    </div>
                </div>
                <div className="Store-Item-card-4">
                    <input type="text" placeholder="Accessory" readOnly={true} />
                    <div className="Item-Card-Desc">
                        <p><b>The Dream Dryer</b></p>
                        Hair dryers come in a variety of sizes and power levels, and they can have
                        a variety of features, such as different heat settings and attachments for
                        styling hair.
                        <input type="button" value="₹ 8500 INR" />
                    </div>
                </div>
                <div className="Store-Item-card-5">
                    <input type="text" placeholder="Gear" readOnly={true}/>
                    <div className="Item-Card-Desc">
                        <p><b>Rikon Lens</b></p>
                        A lens is a transparent piece of material with two opposite regular surfaces
                        that is used to focus light. The shape of the lens determines how it
                        focuses light, and the focal length of the lens is the distance from the
                        lens to the point where parallel rays of light converge.
                        <input type="button" value="₹ 75500 INR" />
                    </div>
                </div>
                <div className="Store-Item-card-6">
                    <input type="text" placeholder="Accessory" readOnly={true} />
                    <div className="Item-Card-Desc">
                        <p><b>Hand Light</b></p>
                        A hand-held flashlight that produces a beam of light. It is typically powered
                        by batteries and has a variety of features, such as adjustable brightness and
                        zoom. Hand lights are used for a variety of purposes, such as camping,
                        hiking, and working in dark areas.
                        <input type="button" value="₹ 4500 INR" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

    const [user, setUser] = useState({});

    useState(() => {
        const localStorageData = JSON.parse(localStorage.getItem('user' || "{}"));
        console.log(localStorageData);
        setUser(localStorageData)
    }, []);

    return (
        <>

            <div className="flex-navbar">

                <div className="navbar-container">

                    <div className="navbar-flex-c">

                        <div className="flex">
                            <div className="flex">
                                <div ><p className="simbol-nav ">💲 Dollar Dash 💸 </p></div>
                                <div > <Link to='/' className="link-container">Home</Link></div>
                                <div >  <Link to='/transition' className="link-container">Mytransition</Link></div>
                                <div > <Link to='/add' className="link-container" >AddTransition</Link></div>
                                <div > <Link to='/signup' className="link-container" >Signup</Link></div>
                                <div > <Link to='/login' className="link-container" >Login </Link></div>
                            </div>
                            <div className="log-out-container">
                                <p ><h2 className="font user-size-logout">Hello{"  "}{user?.name || "user"}🖐🏻 </h2></p>

                                <p className="font-hover">
                                    {
                                        user?.name ? <span className="logout-con" onClick={() => { localStorage.removeItem('user'); window.localStorage.href = '/login'; }}  >LogOut
                                        </span> : null
                                    }
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Navbar
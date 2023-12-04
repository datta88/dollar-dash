import React from "react";
import './Footer.css';

const user = JSON.parse(localStorage.getItem('user' || null))

function Footer() {
    return (
        <>
            <div className="footer-container flex-con">
            <div >
                    <div><h1 className="font-size-h">Home</h1></div>
                    <div><h1 className="font-size-h">My Transition</h1></div>
                    <div><h1 className="font-size-h">Add Transition</h1></div>
                    <div><h1 className="font-size-h">Signup</h1></div>
                    <div><h1 className="font-size-h">Login</h1></div>
                </div>
                <div >
                    <div><h1 className="font-size-h">All {user?.name} Transition</h1></div>
                    <div><h1 className="font-size-h">Transition Type By {user?.name}</h1></div>
                    <div><h1 className="font-size-h">Transition Added By {user?.name}</h1></div>
                    <div><h1 className="font-size-h">Transition Delete By {user?.name}</h1></div>
                    <div><h1 className="font-size-h">{user?.name} are going to LogOut</h1></div>
                </div>
                <div >
                    <div><h1 className="font-size-h">Email :{user?.email} </h1></div>
                    <div><h1 className="font-size-h">Name : {user?.name}</h1></div>
                    <div><h1 className="font-size-h">Mobile No :{user?.mobile}</h1></div>
                </div>
            </div>
        </>
    )
}
export default Footer
import React from "react";
import './Footer.css';

const user = JSON.parse(localStorage.getItem('user' || null))

function Footer() {
    return (
        <>
            <div className="footer-con-main">
                <h1 className="text-center font-footer-simboll">💲 Dollar Dash 💸</h1>
                <div className="footer-container flex-con">
                    <div >
                    <h2 className="font-size-footer-h-tag">Click Me 👇</h2>
                        <div><h1 className="font-size-h">Home</h1></div>
                        <div><h1 className="font-size-h">My Transition</h1></div>
                        <div><h1 className="font-size-h">Add Transition</h1></div>
                        <div><h1 className="font-size-h">Signup</h1></div>
                        <div><h1 className="font-size-h">Login</h1></div>
                    </div>
                    <div >
                        <h2 className="font-size-footer-h-tag">Information 👇</h2>
                        <div><h1 className="font-size-h">All {user?.name} Transition</h1></div>
                        <div><h1 className="font-size-h">Transition Type By {user?.name}</h1></div>
                        <div><h1 className="font-size-h">Transition Added By {user?.name}</h1></div>
                        <div><h1 className="font-size-h">Transition Delete By {user?.name}</h1></div>
                        <div><h1 className="font-size-h">{user?.name} are going to LogOut</h1></div>
                    </div>
                    <div >
                        <h2 className="font-size-footer-h-tag">Start Here 🙂</h2>
                        <div><h1 className="font-size-h">Email :{user?.email} </h1></div>
                        <div><h1 className="font-size-h">Name : {user?.name}</h1></div>
                        <div><h1 className="font-size-h">Mobile No :{user?.mobile}</h1></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
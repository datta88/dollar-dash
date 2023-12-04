
import React, { useEffect, useState } from "react";
import './Add.css';
import Navbar from "../../componant/Navbar/Navbar";
import Auth from './../../util/auth.js'
import axios from 'axios'
import Footer from "../../componant/Footer/Footer.js";

function Add() {

    const [amount, setAmount] = useState('');
    const [type, setType] = useState('debit');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const loaddata = async () => {

        if (!type) {
            return alert('Type is requred');
        }
        if (!amount) {
            return alert('Amount is requred');
        }
        if (!description) {
            return alert('Description is requred');
        }
        if (!category) {
            return alert('Category is requred');
        }

        const userData = JSON.parse(localStorage.getItem('user' || '{}'))
        console.log(userData);
        const response = await axios.post('/api/transition', {
            user: userData?._id,
            amount: amount,
            type: type,
            description: description,
            category: category
        });
        if (response?.data?.success) {
            alert(response?.data?.message);
            window.location.href = '/transition'
        }
        else {
            alert(response?.data?.message);
        }
    }

    useEffect(() => {
        Auth()
    })
    return (
        <>
            <Navbar />

            <div className="mytransition-container">
                <h1 className="text-center-add-con">Add Transition</h1>

                <div className="select-add-main">

                    <div className="flex-box">
                        <div>
                            <h1 className="font-style">Category :</h1>
                        </div>
                        <div>
                            <select className="select-container-add width-add" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                                <option>shopping</option>
                                <option>food</option>
                                <option>rent</option>
                                <option>entertainment</option>
                                <option>travel</option>
                                <option>education</option>
                                <option>other</option>
                            </select>

                        </div>
                    </div>

                    <div className="flex-box">
                        <div><h1 className="font-style">Amount :</h1></div>
                        <div>
                            <input className=" input-amount-container width-add" type="text" onChange={(e) => { setAmount(e.target.value) }} />
                        </div>
                    </div>

                    <div className="flex-box">
                        <div>
                            <h1 className="font-style">Description :</h1>
                        </div>
                        <div>
                            <textarea className=" input-amount-container width-add  " type="text" onChange={(e) => { setDescription(e.target.value) }}  ></textarea>
                        </div>
                    </div>

                    <div className="flex-box ">
                        <div >
                            <h1 className="font-style margin-add-type">Type :</h1>
                        </div>
                        <div>
                            <div className="crdr-flex">
                                <div>
                                    <p className="paragraph-add-container ">credit 
                                    <input type="radio" value="credit" checked={type === "credit"} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }} name="radio" />
                                     </p>
                                </div>
                                <div>
                                    <p className="paragraph-add-container">Debit
                                    <input type="radio" value="debit" checked={type === "debit"} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }} name="radio" />
                                     </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" btn-add">
                    <button className="btn btn-add" type="button" onClick={loaddata}>Add </button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Add
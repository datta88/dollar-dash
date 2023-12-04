import react, { useEffect, useState } from "react";
import Navbar from "./../../componant/Navbar/Navbar";
import axios from 'axios';
import './Update.css';
import { useParams } from "react-router-dom";

function Update() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const { id } = useParams();

    const upadateData = async () => {
        const response = await axios.get(`/api/transition/${id}`);
        const { amount, type, description, category } = response?.data?.data;

        setAmount(amount)
        setType(type)
        setDescription(description)
        setCategory(category)

    }

    useEffect(() => {
        upadateData()
    }, [])

    const updateAdd = async () => {
        
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

        const response = await axios.put(`/api/transition/${id}`, {
            amount,
            type,
            description,
            category
        })

        if (response?.data?.data) {
            alert("update Successfully")
            window.location.href = '/transition'
        }

        setAmount('')
        setCategory('')
        setType('')
        setDescription('')

    }

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
                            <input
                                className="input-amount-container width-add"
                                type="text"
                                value={amount}
                                onChange={(e) => { setAmount(e.target.value) }} />
                        </div>
                    </div>

                    <div className="flex-box">
                        <div>
                            <h1 className="font-style">Description :</h1>
                        </div>
                        <div>
                            <textarea className=" input-amount-container width-add" type="text" value={description} onChange={(e) => { setDescription(e.target.value) }}  ></textarea>
                        </div>
                    </div>

                    <div className="flex-box ">
                        <div >
                            <h1 className="font-style">Type :</h1>
                        </div>
                        <div>
                            <div className="crdr-flex">
                                <div>
                                    <p className="paragraph-add-container ">credit
                                     <input type="radio" value="credit" checked={type === 'credit'} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }}  name="radio" /></p>
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
                    <button className="btn btn-add" type="button" onClick={updateAdd}>Update</button>
                </div>
            </div>
        </>
    )
}


export default Update
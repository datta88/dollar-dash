import React from "react";
import './Home.css';
import Footer from "../../componant/Footer/Footer";
import Navbar from "../../componant/Navbar/Navbar";
import Img from './many.jpg'

function Home() {
    return (
        <>
            <Navbar />
            <img src={Img} className="img-home" />
            <Footer />
        </>
    )
}
export default Home
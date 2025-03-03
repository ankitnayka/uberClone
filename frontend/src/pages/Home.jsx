import React from "react";
import Header from "@/uber/Header";
import MoveToLogin from "@/uber/MoveToLogin";
import Ride from "@/uber/Ride";
import Suggestions from "@/uber/Suggestions";
import Footer from "@/uber/Footer";
import UberTravelSection from "@/uber/UberTravelSection";

const Home = () => {
    return (
    <>
        <Header/>
        <Ride/>
        <Suggestions/>
        <MoveToLogin/>
        <UberTravelSection/>
        <Footer/>
    </>
    )
}

export default Home
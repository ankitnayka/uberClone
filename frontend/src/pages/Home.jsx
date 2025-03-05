import React from "react";
import Header from "@/uber/Header";
import MoveToLogin from "@/uber/MoveToLogin";
import Ride from "@/uber/Ride";
import Suggestions from "@/uber/Suggestions";
import Footer from "@/uber/Footer";
import UberTravelSection from "@/uber/UberTravelSection";
import RideSelection from "@/uber/RideSelection";

const Home = () => {
    return (
    <>
        <Header/>
        <Ride/>
        <RideSelection/>
        <Suggestions/>
        <MoveToLogin/>
        <UberTravelSection/>
        <Footer/>
    </>
    )
}

export default Home
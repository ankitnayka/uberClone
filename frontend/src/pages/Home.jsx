import React from "react";
import { Button } from "../components/ui/button";
import { ArrowBigRight, ArrowRightToLine } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="bg-[#FFB121] h-screen w-full flex flex-col justify-between ">

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="uber" srcset=""
                    className="w-16 ml-5 mt-5 "
                />
                <h1 className="font-bold text-6xl text-center shadow-lg ">Uber</h1>

                <div className="bg-white py-3 px-5">
                    <h2 className="font-bold text-2xl text-center">Get Started with Uber</h2>
                    <Link to='/login'>
                        <Button className="w-full  rounded-lg text-2xl mt-4 py-3">
                            Continue
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
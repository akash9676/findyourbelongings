import React from "react";
import aboutBgPic from "../assets/about-bg-pic.jpg";

const About = () => {
    return (
        <div>
            <div className="relative border-2 border-red-500">
                <div className="absolute flex justify-center items-center text-6xl text-black font-bold border-2 border-black w-full h-full">About</div>
                <img
                    className="h-96 w-screen"
                    src={aboutBgPic}
                ></img>
            </div>
        </div>
    );
};

export default About;

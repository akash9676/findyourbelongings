import React from "react";
import aboutBgPic from "../assets/about-bg-pic.jpg";

const About = () => {
    return (
        <div>
            <div className="relative border-2 border-red-500">
                <div className="absolute top-1/2 left-1/2 text-6xl text-black font-bold">About</div>
                <img
                    className="h-96 w-screen"
                    src={aboutBgPic}
                ></img>
            </div>
        </div>
    );
};

export default About;

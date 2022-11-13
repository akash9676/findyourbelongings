import React from "react";
import aboutBgPic from "../assets/about-bg-pic.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
    return (
        <div>
            <div className="relative">
                <div className="absolute flex justify-center items-center text-6xl text-black font-bold  w-full h-full">
                    About
                </div>
                <div className="absolute w-full">
                    <Navbar />
                </div>
                <img className="h-96 w-screen" src={aboutBgPic}></img>
            </div>
            <div className="flex mt-24 p-14 mx-96">
                <div className="flex-1">
                    <div className="text-2xl font-bold">
                        established in 1995
                    </div>
                </div>
                <div className="flex-1">
                    <div className="">
                        <div className="font-bold mb-8">
                            Tell people about what you, your expertise and
                            experience. Think about what you would want to see
                            on this page if you were looking at an about page.
                            This is your chance to tell about how you are
                            qualified to serve them.
                        </div>
                        <div className="mb-8  text-gray-600">
                            Nulla hendrerit metus et tincidunt tristique. Fusce
                            molestie commodo mauris, vitae vestibulum tortor
                            venenatis non. Pellentesque quis urna a magna
                            bibendum volutpat a at nisl. Suspendisse finibus,
                            tortor id gravida feugiat, nulla leo venenatis nisi,
                            et aliquam quam ligula eget dui. Suspendisse lectus
                            lorem, varius vel dapibus a, vestibulum a eros. Sed
                            sed magna in neque commodo pretium.
                        </div>
                        <div className="mb-8  text-gray-600">
                            We look forward to your stay.
                        </div>
                        <div className="mb-8 text-lg font-bold">
                            John & Steven
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-amber-100">
                <div className="flex mx-96">
                    <div className="p-14 flex-1">
                        <div className="text-2xl font-bold mb-5">Mission</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </div>
                    </div>
                    <div className="p-14 flex-1">
                        <div className="text-2xl font-bold mb-5">Vision</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </div>
                    </div>
                    <div className="p-14 flex-1">
                        <div className="text-2xl font-bold mb-5">Values</div>
                        <div>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Luctus nec ullam corper</li>
                            <li>Pulvinar dapibus leo</li>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default About;

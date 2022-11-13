import React from "react";
import aboutBgPic from "../assets/about-bg-pic.jpg";
import Navbar from "./Navbar";

const About = () => {
    return (
        <div>
            <div className="relative">
              <div className="absolute w-full"><Navbar/></div>
                <div className="absolute flex justify-center items-center text-6xl text-black font-bold  w-full h-full">
                    About
                </div>
                <img className="h-96 w-screen" src={aboutBgPic}></img>
            </div>
            <div className="flex mt-24 p-14 mx-96">
                <div className="flex-1">
                  <div className="text-2xl font-bold border-2 border-red-500">established in 1995</div>
                </div>
                <div className="flex-1">
                  <div className="border-2 border-black">
                      <div className="font-bold mb-8">
                          Tell people about what you, your expertise and
                          experience. Think about what you would want to see on
                          this page if you were looking at an about page. This is
                          your chance to tell about how you are qualified to serve
                          them.
                      </div>
                      <div className="mb-8  text-gray-600">
                          Nulla hendrerit metus et tincidunt tristique. Fusce
                          molestie commodo mauris, vitae vestibulum tortor
                          venenatis non. Pellentesque quis urna a magna bibendum
                          volutpat a at nisl. Suspendisse finibus, tortor id
                          gravida feugiat, nulla leo venenatis nisi, et aliquam
                          quam ligula eget dui. Suspendisse lectus lorem, varius
                          vel dapibus a, vestibulum a eros. Sed sed magna in neque
                          commodo pretium.
                      </div>
                      <div className="mb-8  text-gray-600">We look forward to your stay.</div>
                      <div className="mb-8 text-lg font-bold">John & Steven</div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default About;

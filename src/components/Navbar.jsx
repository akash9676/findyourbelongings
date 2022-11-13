//TODO: make navbar responsive "mobile view"

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <navbar>
            <div className="flex p-2 items-center pr-16 pl-16">
                <div className="text-3xl p-2 font-bold cursor-pointer">
                    Find Your Belongings
                </div>
                <div className="flex-1"></div>
                <div className="hidden lg:flex pr-8 cursor-pointer text-xl font-bold">
                    <div className="p-2 px-7">Home</div>
                    <div className="p-2 px-7">About</div>
                    <div className="p-2 px-7">Services</div>
                    <div className="p-2 px-7">Contact</div>
                    <div className="font-bold text-xl p-2 px-7 bg-button-colour hover:bg-button-hovercolour rounded-full">
                        TAKE ACTION
                    </div>
                </div>
                <div
                    onClick={handleOpen}
                    className="flex items-center justify-center ml-5 lg:hidden h-10"
                >
                    {!open ? (
                        <AiOutlineClose className="ease-in-out duration-500" size={20}/>
                    ) : (
                        <FiMenu className="ease-in-out duration-500" size={20}></FiMenu>
                    )}
                </div>
            </div>
            <div
                className={
                    !open
                        ? "fixed left-0 top-0 w-[60%] bg-gray-200 drop-shadow-2xl h-full ease-in-out duration-500 p-8"
                        : "fixed left-[-100%]"
                }
            >
                <div className="text-3xl p-2 font-bold cursor-pointer">
                    Find Your Belongings
                </div>
                <div className="p-2 px-7 text-lg border-b border-gray-500 cursor-pointer mt-6 hover:bg-gray-400 hover:ease-in-out hover:duration-200 hover:text-white">
                    Home
                </div>
                <div className="p-2 px-7 text-lg border-b border-gray-500 cursor-pointer mt-6 hover:bg-gray-400 hover:ease-in-out hover:duration-200 hover:text-white">
                    About
                </div>
                <div className="p-2 px-7 text-lg border-b border-gray-500 cursor-pointer mt-6 hover:bg-gray-400 hover:ease-in-out hover:duration-200 hover:text-white">
                    Services
                </div>
                <div className="p-2 px-7 text-lg border-b border-gray-500 cursor-pointer mt-6 hover:bg-gray-400 hover:ease-in-out hover:duration-200 hover:text-white">
                    Contact
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;

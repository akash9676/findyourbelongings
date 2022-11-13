
//TODO: make navbar responsive "mobile view"

import {FiMenu} from "react-icons/fi";

const Navbar = () =>{
    return(
        <navbar className="">
            <div className="flex p-2 items-center pr-16 pl-16">
                <div className="p-2 font-bold cursor-pointer">Find Your Belongings</div>
                <div className="flex-1"></div>
                <div className="hidden lg:flex pr-8 cursor-pointer">
                    <div className="font-medium text-xl p-2 pl-7 pr-7">
                        Home
                    </div>
                    <div className="font-medium text-xl p-2 pl-7 pr-7">
                        About
                    </div>
                    <div className="font-medium text-xl p-2 pl-7 pr-7">
                        Services
                    </div>
                    <div className="font-medium text-xl p-2 pl-7 pr-7">
                        Contact
                    </div>
                    <div className="font-medium text-xl p-2 pl-7 pr-7 bg-button-colour hover:bg-button-hovercolour rounded-full">
                        TAKE ACTION
                    </div>
                    <div className="block items-center justify-center ml-5 lg:hidden">
                        <FiMenu></FiMenu>
                    </div>
                </div>
            </div>
        </navbar>
    );
};



export default Navbar
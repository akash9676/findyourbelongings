
//TODO: make navbar responsive "mobile view"

const Navbar = () =>{
    return(
        <navbar className="">
            <div className="flex p-2 items-center pr-16 pl-16">
                <div className="p-2 font-bold">Find Your Belongings</div>
                <div className="flex-1"></div>
                <div className="flex pr-8">
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
                </div>
            </div>
        </navbar>
    );
};



export default Navbar
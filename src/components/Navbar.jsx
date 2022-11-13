
const Navbar = () =>{
    return(
        <navbar className="">
            <div className='flex p-2 items-center pr-16 pl-16'>
                <div className='p-4 font-bold'>
                    Find Your Belongings
                </div>
                <div className='flex-1'></div>
                <div className='flex pr-8'>
                    <div className='font-medium text-xl p-4 pl-7 pr-7'>Home</div>
                    <div className='font-medium text-xl p-4 pl-7 pr-7'>Profile</div>
                    <div className='font-medium text-xl p-4 pl-7 pr-7'>Services</div>
                    <div className='font-medium text-xl p-4 pl-7 pr-7'>Contact</div>
                    <div className='font-medium text-xl p-4 pl-7 pr-7'>TAKE ACTION</div>  
                </div>
            </div>
        </navbar>
    )
}

export default Navbar
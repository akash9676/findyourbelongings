import React from 'react'
import Navbar from './Navbar'

//TODO:h-screen bug
export const Home = () => {
    return (
        <>
            <Navbar/>   
            <div class="flex flex-col justify-center items-center h-screen">
                <div className='font-semibold text-5xl pb-3'>Find Your Belongings</div>
                <div className='pb-3'>You are at right place to get your things back !!</div>
                <div className='flex mt-3'>
                    <button className=' p-2 pl-6 pr-6 mr-10 rounded-full text-lg hover:bg-button-hovercolour' >Found</button>
                    <div className='flex-1'></div>
                    <button className=' p-2 pl-6 pr-6 ml-10 rounded-full text-lg hover:bg-button-hovercolour'>Lost</button>
                </div>
            </div>
        </>
    )
}
export default Home

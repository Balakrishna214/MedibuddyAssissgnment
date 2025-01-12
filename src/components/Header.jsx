import React from 'react';
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { CiWallet } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mt-3  mb-7 bg-white fixed top-0 left-0 w-full shadow-lg z-50">
            <div className="flex items-center space-x-2">
                <FaArrowLeft className="text-xl text-gray-600 cursor-pointer" />
                
                <div>
                    <div className='flex items-center'>
                    <h2 className="text-lg font-semibold">Billekahalli</h2>
                    <FaMapMarkerAlt className="text-xl text-gray-600 ml-1" />
                    </div>
                    <p className="text-xs text-gray-500">Location</p>
                </div>
                
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <CiWallet className="md:text-4xl text-xl cursor-pointer" />
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 py-0.5 md:text-xxs text-xxxs font-bold leading-none text-white bg-blue-500 rounded-full">4529</span>

                    {/* <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span> */}
                </div>
                {/* <div className="relative">
                    <FaBell className="text-xl text-gray-600 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">4529</span>
                </div> */}
                <div className="relative">
                    <CiShoppingCart className="md:text-4xl text-xl cursor-pointer" />
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 py-0.5 md:text-xxs text-xxxs font-bold leading-none text-white bg-blue-500 rounded-full">1</span>
                </div>
            </div>
        </div>
    );
};

export default Header;

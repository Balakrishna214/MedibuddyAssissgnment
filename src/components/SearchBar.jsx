import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="flex justify-center my-4">
            <div className="relative w-4/5 md:w-3/5">
                <input
                    type="text"
                    placeholder="Find lab tests, diagnostics centers"
                    className="w-full h-12 py-2 pl-4 pr-10 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                />
                <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
        </div>
    );
};

export default SearchBar;

import React, { useState } from 'react';
import { MdOutlineTimer } from "react-icons/md";

const sections = ['Popular', 'Center Visit', 'Full Body Check Up', 'Diabetes', 'Women Health'];

const HealthPackages = ({ packages }) => {
    const [selectedSection, setSelectedSection] = useState('Popular');
    const [quantities, setQuantities] = useState(Array(packages.packages.length).fill(1));

    const handleQuantityChange = (index, increment) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            const newQuantity = newQuantities[index] + increment;
            newQuantities[index] = newQuantity < 1 ? 1 : newQuantity;
            return newQuantities;
        });
    };

    const filteredPackages = packages.packages.filter(pkg => {
        if (selectedSection === 'Popular') {
            return pkg.isPopular;
        }
        return pkg.subCategories.includes(selectedSection.toUpperCase());
    });

    return (
        <div className="p-4 bg-blue-100 lg:pt-5 lg:pb-10">
            <h1 className="text-center text-2xl font-bold mb-4">Featured Health Check-up </h1>
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 mb-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedSection(section)} 
                        className={`cursor-pointer px-4 py-2 ${selectedSection === section ? 'bg-blue-500 text-white' : 'bg-slate-50 text-gray-700'} rounded-lg whitespace-nowrap`}
                    >
                        {section}
                    </div>
                ))}
                <p className='text-blue-500'>View more</p>
            </div>
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 lg:w-85">
                {filteredPackages.map((pkg, index) => (
                    <div key={index} className="flex flex-col flex-shrink-0 w-100 lg:w-60   bg-white  rounded-lg shadow-md relative">
                        {pkg.isSponsored && <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">Sponsored</div>}
                        <div className='p-4'> 
                        <h2 className="text-lg font-bold mb-3">{pkg.packageDisplayName}</h2>
                        <div className='flex items-center gap-2 text-blue-600'>
                            <MdOutlineTimer />
                            <p className="">{pkg.reportsTatText}</p>
                        </div>
                        
                        {pkg.testsSummary.map((test, i) => (
                            <p key={i} className="text-gray-600">{test}</p>
                        ))}
                        <p className="text-gray-600">Fasting: {pkg.fastingHoursText}</p>
                        
                        <div className='flex justify-between mt-7'>
                            <div className="mt-2 font-bold text-lg text-green-700">₹{pkg.price}</div>
                            <div className="flex items-center mt-2">
                                <button 
                                    className="px-2 py-1 border border-gray-300"
                                    onClick={() => handleQuantityChange(index, -1)}
                                >-</button>
                                <input 
                                    type="text" 
                                    readOnly 
                                    value={quantities[index]} 
                                    className="w-12 text-center border-t border-b border-gray-300" 
                                />
                                <button 
                                    className="px-2 py-1 border border-gray-300"
                                    onClick={() => handleQuantityChange(index, 1)}
                                >+</button>
                            </div>
                        </div>
                        </div>
                        <div className='mt-auto w-full  bg-blue-600 rounded-t-lg'>
                            {pkg.tags.bottomTag?.map((tag, i) => (
                                <div key={i} className="text-sm text-center  text-slate-50  px-2 py-1">{tag}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthPackages;

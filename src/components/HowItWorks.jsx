import React from 'react';

const HowItWorks = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">How it Works?</h1>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-6 mb-4">
        <div className="lg:w-1/3 flex lg:flex-col items-center p-4">
          <img src="https://i.postimg.cc/h4yp7tSh/delivary.png" alt="Delivery Pick" className="w-16 h-16 mb-2 mr-3" />
          <div className='sm:text-left lg:text-center'>
          <p className="  font-semibold">Delivery Pick</p>
          <div className="text-gray-700 mt-2">
            <p className=" ">Search for required Lab tests and select Diagnostic centre of your choice. Add prescription, patient details and address to complete the booking.</p>
          </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex lg:flex-col items-center p-4">
          <img src="https://i.postimg.cc/VNWFsYGf/post.png" alt="Post" className="w-16 h-16 mb-2 mr-3" />
          <div className='sm:text-left lg:text-center'>
          <p className="  font-semibold">Post</p>
          <div className="text-gray-700 mt-2">
            <p className="">Visit the lab centre as per your booking. For home sample collection, certified professional will collect the samples at your home.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="lg:w-1/3 flex lg:flex-col items-center p-4">
          <img src="https://i.postimg.cc/zv6C23Bj/telescope.png" alt="Telescope" className="w-16 h-16 mb-2 mr-3" />
          <div className='sm:text-left lg:text-center'> 
          <p className="  font-semibold">Telescope</p>
          <div className="text-gray-700 mt-2">
            <p className=" ">We will email you the reports. You can also access your reports within your account on the MediBuddy App.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

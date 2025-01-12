import React from 'react';

const TrustedBy = () => {
  return (
    <div className="p-4">
       
      <div className="flex justify-center items-center mb-4">
      <h1 className="text-center text-2xl font-bold mt-2 mr-2 mb-4">Trusted by
        <span className="text-blue-500">  20,00,000+ </span> Users Every Month
      </h1>
        <img src="https://i.postimg.cc/qMqqfVsx/secure.png" alt="Secure Shield" className="w-16 h-16" />
      </div>
      <div className="flex   lg:grid lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4">
          <img src="https://i.postimg.cc/s2LdZqQs/Sdiagonostic.png" alt="Diagnostics" className="w-16 h-16 mb-2" />
          <p className="text-center">200+ Approved Diagnostic Centres</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://i.postimg.cc/Hx1zK9Fb/Sectest-Samples.png" alt="Tests" className="w-16 h-16 mb-2" />
          <p className="text-center">1200+ Lab Tests Offered</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="https://i.postimg.cc/qvnjGF5p/s-Locations.png" alt="Location" className="w-16 h-16 mb-2" />
          <p className="text-center">1200+ Pincodes Covered</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

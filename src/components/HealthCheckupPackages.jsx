import React from 'react';

const healthPackages = [
  { name: 'Hyper-Tension', url: 'https://i.postimg.cc/7Pch7MWn/hyper-tension.png' },
  { name: 'Obesity', url: 'https://i.postimg.cc/8c1Ws9N4/obisity.png' },
  { name: 'Smoking', url: 'https://i.postimg.cc/X7CJgBMS/smoking.png' },
  { name: 'Diabetic', url: 'https://i.postimg.cc/13bdkcrM/IMG-20250111-175351.png' },
  { name: 'Obesity', url: 'https://i.postimg.cc/8c1Ws9N4/obisity.png' },
  { name: 'Hyper-Tension', url: 'https://i.postimg.cc/7Pch7MWn/hyper-tension.png' },
];

const HealthCheckupPackages = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Lifestyle Health Check-up Packages</h1>
      <div className="grid grid-cols-3  md:grid-cols-6 gap-4">
        {healthPackages.map((packageItem, index) => (
          <div key={index} className="border border-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={packageItem.url} alt={packageItem.name} className="w-16 h-16 mb-2" />
            <p className="text-center">{packageItem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckupPackages;

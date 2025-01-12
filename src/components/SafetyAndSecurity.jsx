import React from 'react';

const safetyMeasures = [
  { name: 'Gov. Approved Diagnostic Centres', url: 'https://i.postimg.cc/d3Gq0Lpd/diagonostics.png' },
  { name: 'Daily Temperature Check of all Technicians', url: 'https://i.postimg.cc/R0j5nvcT/gun.png' },
  { name: 'Mandatory use of Mask & Sanitizers', url: 'https://i.postimg.cc/ydXQYKnx/mask.png' },
  { name: 'Regular Disinfection of Labs', url: 'https://i.postimg.cc/2ySwkZV9/spray.png' }
];

const SafetyAndSecurity = () => {
  return (
    <div className=" p-4">
      <h1 className="text-center text-2xl font-bold mb-4">100% Safe & Secure Labs</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-100 flex flex-col items-center p-4 rounded-lg">
          <img src={safetyMeasures[0].url} alt={safetyMeasures[0].name} className="w-16 h-16 mb-2" />
          <p className="text-center">{safetyMeasures[0].name}</p>
        </div>
        <div className="bg-slate-100 flex flex-col items-center p-4 rounded-lg">
          <img src={safetyMeasures[1].url} alt={safetyMeasures[1].name} className="w-16 h-16 mb-2" />
          <p className="text-center">{safetyMeasures[1].name}</p>
        </div>
        <div className=" bg-slate-100 flex flex-col items-center p-4 rounded-lg">
          <img src={safetyMeasures[2].url} alt={safetyMeasures[2].name} className="w-16 h-16 mb-2" />
          <p className="text-center">{safetyMeasures[2].name}</p>
        </div>
        <div className="bg-slate-100 flex flex-col items-center p-4 rounded-lg">
          <img src={safetyMeasures[3].url} alt={safetyMeasures[3].name} className="w-16 h-16 mb-2" />
          <p className="text-center">{safetyMeasures[3].name}</p>
        </div>
      </div>
    </div>
  );
};

export default SafetyAndSecurity;

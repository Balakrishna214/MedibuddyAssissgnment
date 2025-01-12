import React from 'react';
import IconCard from './IconCard';

const IconsSection = ({ icons }) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-4">
            {icons.map((icon, index) => (
                <IconCard key={index} icon={icon} />
            ))}
        </div>
    );
};

export default IconsSection;

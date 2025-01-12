import React from 'react';

const CustomLoader = ({ icons }) => {
    return (
        <div className="flex justify-center items-center gap-10 h-screen">
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.iconUrl}
                    alt={icon.iconText}
                    className="w-8 h-8 animate-zoomInOut"
                />
            ))}
        </div>
    );
};

export default CustomLoader;

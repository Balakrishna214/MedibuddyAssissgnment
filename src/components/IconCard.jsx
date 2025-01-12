import React from 'react';

const IconCard = ({ icon }) => {
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = icon.deeplink;
    };

    return (
        <div onClick={handleClick} className="cursor-pointer text-center p-4 lg:mt-2 lg:mb-4 rounded-lg  ">
            <img src={icon.iconUrl} alt={icon.iconText} className="w-12 h-12 lg:w-24 lg:h-24 mx-auto" />
            <p className="mt-2 text-xs">{icon.iconText}</p>
        </div>
    );
};

export default IconCard;

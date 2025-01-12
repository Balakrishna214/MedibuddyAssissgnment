import React from 'react';

const BannersSection = ({ banners }) => {
    return (
        <div className="flex overflow-x-auto space-x-4  p-4 lg:mb-6 hide-scrollbar">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    // 
                    className="flex-shrink-0 w-11/12 md:w-2/5 lg:w-1/4 cursor-pointer"
                    onClick={() => window.location.href = banner.deeplink}
                >
                    <img
                        src={banner.bannerUrl}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-auto rounded-md shadow-sm"
                    />
                </div>
            ))}
        </div>
    );
};

export default BannersSection;

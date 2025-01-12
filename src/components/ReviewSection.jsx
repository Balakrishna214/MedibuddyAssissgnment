import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewSection = ({ reviews }) => {
  return (
    <div className="max-w-full p-4 mx-2">
      <h1 className="text-xl md:text-2xl font-bold mb-4">What our Users say</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4">
        {reviews.map((review, index) => (
          <div key={index} className="review-item flex-shrink-0 w-11/12 sm:w-95% lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                i < review.rating ? <AiFillStar key={i} className="text-yellow-500" /> : <AiOutlineStar key={i} className="text-gray-300" />
              ))}
              <span className="text-sm text-gray-500 ml-2">{review.days}</span>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-2">{review.content}</p>
            <hr className="border-t border-gray-300 my-2" />
            <div className="flex items-center">
              <span className="text-sm text-gray-500">{review.name}</span>
            </div>
          </div>
        ))}
      </div> 
    </div>
  ); 
};

export default ReviewSection;

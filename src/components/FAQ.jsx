import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function FAQ({ faqData }) {
  const [expandedItems, setExpandedItems] = useState(faqData.map(item => item.isExpanded));

  const handleToggle = index => {
    setExpandedItems(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="max-w-full md:max-w-7xl mx-auto bg-white p-4 rounded-lg shadow-md mt-2">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={item.id} className="faq-item mb-4">
          <div className="flex items-center cursor-pointer" onClick={() => handleToggle(index)}>
            <h3 className="text-md md:text-lg font-semibold text-gray-600">{item.question}</h3>
            {expandedItems[index] ? (
              <AiOutlineMinusCircle className="ml-auto w-6 h-6 text-gray-400" />
            ) : (
              <AiOutlinePlusCircle className="ml-auto w-6 h-6 text-gray-400" />
            )}
          </div>
          {expandedItems[index] && (
            <div className="ml-4 mt-2">
              {item.answer && <p className="text-sm md:text-base font-medium text-gray-600 mb-2">{item.answer}</p>}
              {item.points && item.points.map((point, pIndex) => (
                <div key={pIndex} className="mb-2">
                  <p className="text-sm md:text-base text-gray-600">{point.pnt}</p>
                  {point.subpnt && point.subpnt.map((subpnt, spIndex) => (
                    <div key={spIndex} className="ml-6 mb-2">
                      <p className="text-sm md:text-base text-gray-600">{subpnt}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          <hr className="border-t border-gray-300 my-4" />
        </div>
      ))}
    </div>
  );
}

export default FAQ;

import React from "react";

const Card1 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <div className="w-16 h-16 mb-4">
      'joke'
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Feature Title</h3>
      <p className="mt-2 text-gray-600">
        Brief description of the feature goes here. It should be concise and
        informative.
      </p>
    </div>
  );
};
export default Card1;
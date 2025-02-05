import React from 'react';

const GIFPreview: React.FC = () => {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-64 h-64 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg">
        <p className="text-center px-4 text-white">Your GIF will appear here</p>
      </div>
    </div>
  );
};

export default GIFPreview; 
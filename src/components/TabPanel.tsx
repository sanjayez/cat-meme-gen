import React from 'react';

interface TabPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabPanel: React.FC<TabPanelProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <button
        onClick={() => setActiveTab('Image')}
        className={`px-3 py-2 border-b-2 cursor-pointer text-sm md:text-base ${
          activeTab === 'Image' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400'
        }`}
      >
        Image
      </button>
      <button
        onClick={() => setActiveTab('GIF')}
        className={`px-3 py-2 border-b-2 cursor-pointer text-sm md:text-base ${
          activeTab === 'GIF' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400'
        }`}
      >
        GIF
      </button>
    </div>
  );
};

export default TabPanel; 
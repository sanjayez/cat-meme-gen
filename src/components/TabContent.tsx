import React from 'react';
import ImgPreview from './ImgPreview';
import GIFPreview from './GIFPreview';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <div className="mt-4 text-center">
      {activeTab === 'Image' ? <ImgPreview /> : <GIFPreview /> }
    </div>

  );
};

export default TabContent; 
import { useState } from 'react';

const useActiveTab = (initActiveTab = '1') => {
  const [activeTab, setActiveTab] = useState(initActiveTab);

  const toggleTab = tab => {
    if (activeTab === tab) return;
    setActiveTab(tab);
  };
  return [activeTab, toggleTab];
};
export default useActiveTab;

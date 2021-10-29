import { useState } from 'react';

const useActiveTab = (initActiveTab = 1) => {
  const [activeTab, setActiveTab] = useState(initActiveTab);

  return {
    activeTab,
    toggleTab: tab => {
      if (activeTab === tab) return;
      setActiveTab(tab);
    },
    toggleTabNext: () => setActiveTab(prevActivaTab => prevActivaTab + 1),
    toggleTabPrev: () => setActiveTab(prevActivaTab => prevActivaTab - 1),
  };
};
export default useActiveTab;

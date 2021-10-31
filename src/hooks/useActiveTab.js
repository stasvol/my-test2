import { useState } from 'react';

const useActiveTab = (initActiveTab = 1) => {
  const [activeTab, setActiveTab] = useState(initActiveTab);

  const toggleTab = tab => {
    if (activeTab === tab) return;
    setActiveTab(tab);
  };
  const toggleTabNext = () => setActiveTab(prevActivaTab => prevActivaTab + 1);
  const toggleTabPrev = () => setActiveTab(prevActivaTab => prevActivaTab - 1);

  return {
    activeTab,
    toggleTab,
    toggleTabNext,
    toggleTabPrev,
  };
};
export default useActiveTab;

import { useState, useCallback } from 'react';

const useActiveTab = (initActiveTab = 1) => {
  const [activeTab, setActiveTab] = useState(initActiveTab);

  const toggleTab = useCallback(
    tab => {
      if (activeTab === tab) return;
      setActiveTab(tab);
    },
    [activeTab],
  );
  const toggleTabNext = useCallback(() => {
    setActiveTab(prevActivaTab => prevActivaTab + 1);
  }, []);
  const toggleTabPrev = useCallback(() => {
    setActiveTab(prevActivaTab => prevActivaTab - 1);
  }, []);

  return {
    activeTab,
    toggleTab,
    toggleTabNext,
    toggleTabPrev,
  };
};
export default useActiveTab;

import { useState } from 'react';

// const useActiveTab = (initActiveTab = 1) => {
//   const [activeTab, setActiveTab] = useState(initActiveTab);
//
//   const toggleTab = tab => {
//     if (activeTab === tab) return;
//     setActiveTab(tab);
//   };
//   const toggleTabNext = () => {
//     return setActiveTab(prevActivaTab => prevActivaTab + 1);
//   };
//   const toggleTabPrev = () => {
//     return setActiveTab(prevActivaTab => prevActivaTab - 1);
//   };
//
//   return { activeTab, toggleTab, toggleTabPrev, toggleTabNext };
// };
// export default useActiveTab;

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

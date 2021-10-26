import { useState } from 'react';

const useBasicIsCheck = (initIsCheck = false) => {
  const [isCheck, setIsCheck] = useState(initIsCheck);

  const createDataChildContIsCheck = value => {
    setIsCheck(value);
  };
  return [isCheck, createDataChildContIsCheck];
};
export default useBasicIsCheck;

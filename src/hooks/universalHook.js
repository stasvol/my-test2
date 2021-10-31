import { useState } from 'react';

const useUniversalHook = initValue => {
  const [value, setValue] = useState(initValue);

  const basicFunction = data => {
    setValue(data);
  };
  return [value, basicFunction];
};
export default useUniversalHook;

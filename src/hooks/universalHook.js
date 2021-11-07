import { useState } from 'react';

const useFieldValueHook = initValue => {
  const [value, setValue] = useState(initValue);

  const basicFunction = data => {
    setValue(data);
  };

  const handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    setValue(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  };
  return [value, basicFunction, handleChange];
};
export default useFieldValueHook;

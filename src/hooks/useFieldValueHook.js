import { useState } from 'react';

const useFieldValueHook = initValue => {
  const [valueField, setValueField] = useState(initValue);

  const changeValue = data => {
    setValueField(data);
  };

  const handleChangeField = e => {
    e.preventDefault();
    const { value, name } = e.target;
    setValueField(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return { valueField, changeValue, handleChangeField };
};
export default useFieldValueHook;

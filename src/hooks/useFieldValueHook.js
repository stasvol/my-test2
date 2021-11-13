import { useState, useCallback } from 'react';

const useFieldValueHook = initValue => {
  const [valueField, setValueField] = useState(initValue);

  const changeValue = useCallback(data => {
    setValueField(data);
  }, []);

  const handleChangeField = useCallback(e => {
    e.preventDefault();
    const { value, name } = e.target;
    setValueField(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }, []);

  return { valueField, changeValue, handleChangeField };
};

export default useFieldValueHook;

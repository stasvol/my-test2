import { useState } from 'react';

const useContactValue = () => {
  const [valueContact, setValueContact] = useState();

  const createDataChildContact = value => {
    setValueContact(value);
  };
  return [valueContact, createDataChildContact];
};
export default useContactValue;

import { useState } from 'react';
import PropTypes from 'prop-types';

import Publication from '../components/publication';

const ContainerPublication = ({
  valueInfo,
  isCheck,
  valueContact,
  imgFile,
  toggleTabPrev,
}) => {
  const [check, setCheck] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = ({ target: { name } }) => {
    setCheck(prevCheck => {
      const checkInArr = prevCheck.some(check => check === name);

      return checkInArr
        ? prevCheck.filter(check => check !== name)
        : [...prevCheck, name];
    });
  };

  const infoProps = {
    ...valueInfo,
    ...valueContact,
    isCheck,
    imgFile,
    check,
  };

  return (
    <Publication
      handleChange={handleChange}
      toggleTabPrev={toggleTabPrev}
      infoProps={infoProps}
      toggle={toggle}
      modal={modal}
    />
  );
};

ContainerPublication.propTypes = {
  toggleTabPrev: PropTypes.func,
  valueInfo: PropTypes.shape({
    mainName: PropTypes.string,
    description: PropTypes.string,
  }),
  isCheck: PropTypes.bool,
  valueContact: PropTypes.shape({
    telephone: PropTypes.string,
    email: PropTypes.string,
  }),
  imgFile: PropTypes.arrayOf(PropTypes.string),
};

ContainerPublication.defaultProps = {
  toggleTabPrev: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};

export default ContainerPublication;

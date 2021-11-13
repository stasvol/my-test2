import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';

import checkArr from './constants/checkArrPublication';
import ModalInfo from './modal/modalInfo';
import { WarningButton, InfoButton } from './buttons/baseButton';

import style from '../style/tabs.module.css';

const Publication = ({
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
  // const infoProps = { ...props, check };
  return (
    <div className={style.body}>
      <Form>
        {checkArr.map(({ name, id }) => (
          <FormGroup check key={`${id}${name}`}>
            <Label check>
              <div className={style.check}>
                <Input
                  onChange={handleChange}
                  type="checkbox"
                  name={name}
                  checkbox="Услуга 1"
                />{' '}
                {name}
              </div>
            </Label>
          </FormGroup>
        ))}
        <FormGroup check>
          <ButtonGroup>
            <WarningButton className={style.btn} onClick={toggleTabPrev} />
            <InfoButton className={style.btn} onClick={toggle} />
          </ButtonGroup>
        </FormGroup>
      </Form>
      <div>
        <ModalInfo infoProps={infoProps} toggle={toggle} modal={modal} />
      </div>
    </div>
  );
};
Publication.propTypes = {
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
Publication.defaultProps = {
  toggleTabPrev: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};

export default Publication;

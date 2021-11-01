import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ModalInfo from '../modal/modalInfo';
import style from '../style/tabs.module.css';

const Publication = ({
  activeTab,
  valueInfo,
  isCheck,
  valueContact,
  imgFile,
  toggleTabPrev,
}) => {
  const [check, setCheck] = useState([]);
  const [modal, setModal] = useState(false);

  const checkArr = [
    { name: 'Услуга 1 ', id: 1 },
    { name: 'Услуга 2 ', id: 2 },
    { name: 'Услуга 3 ', id: 3 },
    { name: 'Услуга 4 ', id: 4 },
    { name: 'Услуга 5 ', id: 5 },
  ];

  const toggle = () => setModal(!modal);

  const handleChange = ({ target: { name } }) => {
    setCheck(prevCheck => {
      const checkInArr = prevCheck.some(check => check === name);

      return checkInArr
        ? prevCheck.filter(check => check !== name)
        : [...prevCheck, name];
    });
  };

  const objProps = {
    ...valueInfo,
    ...valueContact,
    isCheck,
    imgFile,
    check,
  };
  // const objProps = { ...props, check };
  return (
    <div className={style.body}>
      <Form>
        {checkArr.map(el => {
          return (
            <FormGroup check key={`${el.id}${el.name}`}>
              <Label check>
                <div className={style.check}>
                  <Input
                    onChange={handleChange}
                    type="checkbox"
                    name={el.name}
                    checkbox="Услуга 1"
                  />{' '}
                  {el.name}
                </div>
              </Label>
            </FormGroup>
          );
        })}
        <FormGroup check>
          <ButtonGroup>
            <Button
              className={classnames({ active: activeTab === 3 }, style.btn)}
              onClick={toggleTabPrev}
              color="warning"
            >
              Prev
            </Button>
            <Button className={style.btn} color="info" onClick={toggle}>
              Save
            </Button>
          </ButtonGroup>
        </FormGroup>
      </Form>
      <div>
        <ModalInfo objProps={objProps} toggle={toggle} modal={modal} />
      </div>
    </div>
  );
};
Publication.propTypes = {
  activeTab: PropTypes.number,
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
  activeTab: 1,
  toggleTabPrev: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};

export default Publication;

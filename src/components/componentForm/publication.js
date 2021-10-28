import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ModalInfo from '../modal/modalInfo';
import style from '../style/tabs.module.css';

const Publication = ({
  activeTab,
  toggleTab,
  valueInfo,
  isCheck,
  useBasicIsCheck,
  valueContact,
  imgFile,
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
  const handleToggleTab = () => {
    toggleTab('3');
  };
  useBasicIsCheck();

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
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 1 "
                checkbox="Услуга 1"
              />{' '}
              Услуга 1
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 2 "
                checkbox="Услуга 2"
              />{' '}
              Услуга 2
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 3 "
                checkbox="Услуга 3"
              />{' '}
              Услуга 3
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 4 "
                checkbox="Услуга 4"
              />{' '}
              Услуга 4
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 5 "
                checkbox="Услуга 5"
              />{' '}
              Услуга 5
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <ButtonGroup>
            <Button
              className={classnames({ active: activeTab === '3' }, style.btn)}
              onClick={handleToggleTab}
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
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
  useBasicIsCheck: PropTypes.func,
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
  activeTab: '',
  toggleTab: () => {},
  useBasicIsCheck: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};
export default Publication;

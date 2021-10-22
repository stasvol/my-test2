import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import classnames from 'classnames';
import style from '../CSS/tabs.module.css';

const ContactInformation = ({
  activeTab,
  toggleTab,
  createDataChildContact,
}) => {
  // const [valueTab, setValueTab] = useState('')
  const [valueContact, setValueContact] = useState({
    telephone: '',
    email: '',
  });

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { name } = e.target;
    // valueData.push(value)
    setValueContact(prevValueContact => ({
      ...prevValueContact,
      [name]: value,
    }));
  };

  useEffect(() => {
    createDataChildContact(valueContact);
  }, [createDataChildContact, valueContact]);

  // const handleSubmit = (e)=> {
  //
  //     e.preventDefault()
  //
  //
  // }
  // console.log(valueData)

  return (
    <AvForm>
      {/* <AvForm > */}
      <FormGroup>
        <Label for="exampleEmail">
          Telephone:
          <AvField
            onChange={handleChange}
            type="text"
            name="telephone"
            id="exampleEmail"
            placeholder="telephone number"
            bsSize="lg"
            required
            value={valueContact.telephone}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">
          Email:
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            bsSize="lg"
            value={valueContact.email}
          />
        </Label>
      </FormGroup>
      <Button
        className={classnames({ active: activeTab === '1' }, style.btn)}
        onClick={() => {
          toggleTab('1');
        }}
        color="warning"
      >
        Prev
      </Button>
      <Button
        disabled={valueContact.telephone <= 0}
        className={classnames({ active: activeTab === '3' }, style.btn)}
        onClick={() => {
          toggleTab('3');
        }}
        color="success"
      >
        Next
      </Button>
      {/* </AvForm> */}
      {/*  <FormGroup> */}
      {/*    <ButtonGroup> */}
      {/*    <Button className={style.btn} color={'warning'}>Prev</Button> */}
      {/*    <Button className={style.btn} color={'success'}>Next</Button> */}
      {/*    </ButtonGroup> */}
      {/* </FormGroup> */}
    </AvForm>
  );
};
ContactInformation.propTypes = {
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
  createDataChildContact: PropTypes.func,
};
ContactInformation.defaultProps = {
  activeTab: '',
  toggleTab: () => {},
  createDataChildContact: () => {},
};

export default ContactInformation;

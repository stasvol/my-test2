import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import classnames from 'classnames';
import style from '../style/tabs.module.css';

const objValueContact = {
  telephone: '',
  email: '',
};

const ContactInformation = ({
  activeTab,
  valueContact,
  useContactValue,
  createDataChildContact,
  toggleTabNext,
  toggleTabPrev,
}) => {
  useContactValue(objValueContact);

  const handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    // valueData.push(value)
    createDataChildContact(prevValueContact => ({
      ...prevValueContact,
      [name]: value,
    }));
  };

  useEffect(() => {
    createDataChildContact(valueContact);
  }, [createDataChildContact, valueContact]);

  return (
    <AvForm>
      {/* <AvForm > */}
      <FormGroup>
        <Label for="exampleTelephone">
          Telephone:
          <AvField
            onChange={handleChange}
            type="text"
            name="telephone"
            id="exampleTelephone"
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
          <AvField
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
        className={classnames({ active: activeTab === 1 }, style.btn)}
        onClick={toggleTabPrev}
        color="warning"
      >
        Prev
      </Button>
      <Button
        disabled={!valueContact.telephone}
        className={classnames({ active: activeTab === 3 }, style.btn)}
        onClick={toggleTabNext}
        color="success"
      >
        Next
      </Button>
    </AvForm>
  );
};
ContactInformation.propTypes = {
  activeTab: PropTypes.number,
  toggleTabPrev: PropTypes.func,
  toggleTabNext: PropTypes.func,
  useContactValue: PropTypes.func,
  valueContact: PropTypes.shape({
    telephone: PropTypes.string,
    email: PropTypes.string,
  }),
  createDataChildContact: PropTypes.func,
};
ContactInformation.defaultProps = {
  activeTab: 1,
  valueContact: {},
  toggleTabPrev: () => {},
  toggleTabNext: () => {},
  useContactValue: () => {},
  createDataChildContact: () => {},
};

export default ContactInformation;

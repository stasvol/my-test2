import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { SuccessButton, WarningButton } from '../buttons/baseButton';
// import classnames from 'classnames';
// import ButtonPrev from '../buttons/buttonPrev';
// import ButtonNext from '../buttons/buttonNext';

import style from '../style/tabs.module.css';

const ContactInformation = ({
  // activeTab,
  valueContact,
  // createDataChildContact,
  handleChangeContact,
  toggleTabNext,
  toggleTabPrev,
}) => {
  // const handleChange = e => {
  //   e.preventDefault();
  //   const { value, name } = e.target;
  //   createDataChildContact(prevValueContact => ({
  //     ...prevValueContact,
  //     [name]: value,
  //   }));
  // };

  // useEffect(() => {
  //   createDataChildContact(valueContact);
  // }, [createDataChildContact, valueContact]);

  return (
    <AvForm>
      <FormGroup>
        <Label for="exampleTelephone">
          Telephone:
          <AvField
            onChange={handleChangeContact}
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
            onChange={handleChangeContact}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            bsSize="lg"
            value={valueContact.email}
          />
        </Label>
      </FormGroup>
      <WarningButton onClick={toggleTabPrev} className={style.btn} />

      {/* /!* <ButtonPrev onClick={toggleTabPrev} /> *!/ */}
      {/* /!* <Button *!/ */}
      {/* /!*  className={classnames({ active: activeTab === 1 }, */}
      {/* style.btn)} *!/ */}
      {/* /!*  onClick={toggleTabPrev} *!/ */}
      {/* /!*  color="warning" *!/ */}
      {/* /!* > *!/ */}
      {/* /!*  prev *!/ */}
      {/* /!* </Button> *!/ */}
      {/* /!* <Button *!/ */}
      {/* /!* disabled={!valueContact.telephone} *!/ */}
      {/* /!*  className={classnames({ active: activeTab === 3 }, */}
      {/* style.btn)} *!/ */}
      {/* /!*  onClick={toggleTabNext} *!/ */}
      {/* /!*  color="success" *!/ */}
      {/* /!* > *!/ */}
      {/* /!*  next *!/ */}
      {/* /!* </Button> *!/ */}
      <SuccessButton
        className={style.btn}
        onClick={toggleTabNext}
        disabled={!valueContact.telephone}
      />
      {/* <ButtonNext onClick={toggleTabNext}
      disabled={!valueContact.telephone}/> */}
    </AvForm>
  );
};
ContactInformation.propTypes = {
  // activeTab: PropTypes.number,
  toggleTabPrev: PropTypes.func,
  toggleTabNext: PropTypes.func,
  valueContact: PropTypes.shape({
    telephone: PropTypes.string,
    email: PropTypes.string,
  }),
  // createDataChildContact: PropTypes.func,
  handleChangeContact: PropTypes.func,
};
ContactInformation.defaultProps = {
  // activeTab: 1,
  valueContact: {},
  toggleTabPrev: () => {},
  toggleTabNext: () => {},
  // createDataChildContact: () => {},
  handleChangeContact: () => {},
};

export default ContactInformation;

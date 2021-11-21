import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { SuccessButton, WarningButton } from './baseButton';

import style from '../styles/tabs.module.css';

const ContactInformation = ({
  valueContact,
  handleChangeContact,
  toggleTabNext,
  toggleTabPrev,
}) => (
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
    <WarningButton onClick={toggleTabPrev} className={style.btn}>
      prev
    </WarningButton>
    <SuccessButton
      className={style.btn}
      onClick={toggleTabNext}
      disabled={!valueContact.telephone}
    >
      {' '}
      next
    </SuccessButton>
  </AvForm>
);

ContactInformation.propTypes = {
  toggleTabPrev: PropTypes.func,
  toggleTabNext: PropTypes.func,
  valueContact: PropTypes.shape({
    telephone: PropTypes.string,
    email: PropTypes.string,
  }),
  handleChangeContact: PropTypes.func,
};
ContactInformation.defaultProps = {
  valueContact: {},
  toggleTabPrev: () => {},
  toggleTabNext: () => {},
  handleChangeContact: () => {},
};

export default ContactInformation;

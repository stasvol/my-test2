import PropTypes from 'prop-types';
import { ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';

import { checkArr } from '../constants/checkArr';
import ModalInfoContainer from '../containers/modalInfoContainer';
import { WarningButton, InfoButton } from './baseButton';

import style from '../styles/tabs.module.css';

const Publication = ({
  handleChange,
  toggleTabPrev,
  infoProps,
  toggle,
  modal,
}) => (
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
          <WarningButton className={style.btn} onClick={toggleTabPrev}>
            prev
          </WarningButton>
          <InfoButton className={style.btn} onClick={toggle}>
            save
          </InfoButton>
        </ButtonGroup>
      </FormGroup>
    </Form>
    <div>
      <ModalInfoContainer infoProps={infoProps} toggle={toggle} modal={modal} />
    </div>
  </div>
);

Publication.propTypes = {
  toggleTabPrev: PropTypes.func,
  handleChange: PropTypes.func,
  infoProps: PropTypes.shape({
    valueInfo: PropTypes.shape({
      mainName: PropTypes.string,
      description: PropTypes.string,
    }),
    valueContact: PropTypes.shape({
      telephone: PropTypes.string,
      email: PropTypes.string,
    }),
    imgFile: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  toggle: PropTypes.func,
  modal: PropTypes.bool,
};

Publication.defaultProps = {
  toggleTabPrev: () => {},
  handleChange: () => {},
  toggle: () => {},
  modal: false,
};

export default Publication;

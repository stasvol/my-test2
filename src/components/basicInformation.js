import PropTypes from 'prop-types';
import { FormGroup, Label, CustomInput, ButtonGroup } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';

import { SuccessButton } from './baseButtons';
import { LargeField } from './fields';

import style from '../styles/tabs.module.css';

const BasicInformation = ({
  valueInfo,
  isCheck,
  childIsCheck,
  handleChangeInfo,
  toggleTabNext,
}) => {
  const toggleCheck = () => {
    childIsCheck(prevIsCheck => !prevIsCheck);
  };

  return (
    <AvForm className="mt-2">
      <FormGroup>
        <Label>
          Введите имя:
          <LargeField
            onChange={handleChangeInfo}
            name="mainName"
            type="text"
            placeholder="Your name"
            required
            value={valueInfo.mainName}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="text">
          Описание:
          <LargeField
            onChange={handleChangeInfo}
            type="textarea"
            name="textarea"
            id="text"
            placeholder="Description"
            value={valueInfo.description}
          />
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          Статус:
          <b>
            {isCheck ? (
              <i className={style.on}> on</i>
            ) : (
              <i className={style.off}> off</i>
            )}
          </b>
          <CustomInput
            onClick={toggleCheck}
            type="switch"
            id="customSwitch"
            name="customSwitch"
            label="select"
            value={isCheck}
          />
        </Label>
      </FormGroup>

      <ButtonGroup>
        <SuccessButton
          className={style.btnNext}
          onClick={toggleTabNext}
          disabled={!valueInfo.mainName}
        >
          {' '}
          next
        </SuccessButton>
      </ButtonGroup>
    </AvForm>
  );
};

BasicInformation.propTypes = {
  isCheck: PropTypes.bool,
  toggleTabNext: PropTypes.func,
  handleChangeInfo: PropTypes.func,
  childIsCheck: PropTypes.func,
  valueInfo: PropTypes.shape({
    mainName: PropTypes.string,
    description: PropTypes.string,
    props: PropTypes.node,
  }),
};

BasicInformation.defaultProps = {
  isCheck: false,
  toggleTabNext: () => {},
  handleChangeInfo: () => {},
  childIsCheck: () => {},
  valueInfo: {},
};

export default BasicInformation;

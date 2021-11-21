import PropTypes from 'prop-types';
import { FormGroup, Label, CustomInput, ButtonGroup } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { SuccessButton } from './baseButton';
import { FullWidthlabel } from './fullWidthlabel';

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
      <FormGroup check inline>
        <FullWidthlabel>
          Введите имя:
          <AvField
            onChange={handleChangeInfo}
            name="mainName"
            type="text"
            placeholder="Text"
            bsSize="lg"
            required
            value={valueInfo.mainName}
          />
        </FullWidthlabel>
      </FormGroup>
      <FormGroup>
        <FullWidthlabel for="exampleText">
          Описание:
          <AvField
            onChange={handleChangeInfo}
            type="textarea"
            name="description"
            id="exampleText"
            placeholder="text"
            value={valueInfo.description}
          />
        </FullWidthlabel>
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
            id="exampleCustomSwitch"
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

import PropTypes from 'prop-types';
import { FormGroup, Label, CustomInput, ButtonGroup } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { SuccessButton } from './buttons/baseButton';

import style from '../style/tabs.module.css';

const BasicInformation = ({
  valueInfo,
  isCheck,
  createDataChildContIsCheck,
  handleChangeInfo,
  toggleTabNext,
}) => {
  const toggleCheck = () => {
    createDataChildContIsCheck(prevIsCheck => !prevIsCheck);
  };

  return (
    <AvForm className="mt-2">
      <FormGroup check inline>
        <Label sm="12">
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
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" sm="11">
          Описание:
          <AvField
            onChange={handleChangeInfo}
            type="textarea"
            name="description"
            id="exampleText"
            placeholder="text"
            value={valueInfo.description}
          />
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          Статус:
          <b>
            {isCheck ? (
              <i className={style.on}> ON</i>
            ) : (
              <i className={style.off}> OFF</i>
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
  createDataChildContIsCheck: PropTypes.func,
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
  createDataChildContIsCheck: () => {},
  valueInfo: {},
};

export default BasicInformation;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, CustomInput, Button, ButtonGroup } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import classnames from 'classnames';
import style from '../style/tabs.module.css';

const objValueInfo = {
  mainName: '',
  description: '',
};

const BasicInformation = ({
  activeTab,
  toggleTab,
  valueInfo,
  useBasicValueInfo,
  isCheck,
  useBasicIsCheck,
  createDataChildContIsCheck,
  createDataChildInfo,
}) => {
  // const [isCheck, setIsCheck] = useState(false);
  // const [valueInfo, setValueInfo] = useState(objValueInfo);
  useBasicValueInfo(objValueInfo);
  useBasicIsCheck();

  const handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    createDataChildInfo(prevValueInfo => ({
      ...prevValueInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    createDataChildInfo(valueInfo);
  }, [createDataChildInfo, valueInfo]);

  const toggleCheck = () => {
    createDataChildContIsCheck(prevIsCheck => !prevIsCheck);
  };

  useEffect(() => {
    createDataChildContIsCheck(isCheck);
  }, [createDataChildContIsCheck, isCheck]);

  const handleValidSubmit = e => {
    e.preventDefault();
  };
  const handleInvalidSubmit = e => {
    e.preventDefault();
  };

  return (
    <AvForm
      className="mt-2"
      onValidSubmit={handleValidSubmit}
      onInvalidSubmit={handleInvalidSubmit}
    >
      <FormGroup check inline>
        <Label sm="12">
          Заголовок:
          <AvField
            onChange={handleChange}
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
            onChange={handleChange}
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
        <Button
          disabled={valueInfo.mainName <= 0}
          className={classnames({ active: activeTab === '2' }, style.btnNext)}
          onClick={() => {
            toggleTab('2');
          }}
          color="success"
        >
          Next
        </Button>
      </ButtonGroup>
    </AvForm>
  );
};
BasicInformation.propTypes = {
  activeTab: PropTypes.string,
  isCheck: PropTypes.bool,
  toggleTab: PropTypes.func,
  useBasicValueInfo: PropTypes.func,
  useBasicIsCheck: PropTypes.func,
  createDataChildInfo: PropTypes.func,
  createDataChildContIsCheck: PropTypes.func,
  valueInfo: PropTypes.shape({
    mainName: PropTypes.string,
    description: PropTypes.string,
  }),
};
BasicInformation.defaultProps = {
  activeTab: '',
  isCheck: false,
  toggleTab: () => {},
  useBasicValueInfo: () => {},
  useBasicIsCheck: () => {},
  createDataChildInfo: () => {},
  createDataChildContIsCheck: () => {},
  valueInfo: {},
};

export default BasicInformation;

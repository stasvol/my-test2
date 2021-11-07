import React from 'react';
import PropTypes from 'prop-types';

import { AvForm, AvField } from 'availity-reactstrap-validation';
import { FormGroup, Label, CustomInput, ButtonGroup } from 'reactstrap';
// import classnames from 'classnames';
// import ButtonNext from '../buttons/buttonNext';
import { SuccessButton } from '../buttons/baseButton';
// import handleChangeInfo from '../eventHandler/eventHandlerInfo';

import style from '../style/tabs.module.css';

const BasicInformation = ({
  // activeTab,
  valueInfo,
  isCheck,
  createDataChildContIsCheck,
  handleChangeInfo,
  // createDataChildInfo,
  toggleTabNext,
}) => {
  // const handleChange = e => {
  //   e.preventDefault();
  //   const { value, name } = e.target;
  //   createDataChildInfo(prevValueInfo => ({
  //     ...prevValueInfo,
  //     [name]: value,
  //   }));
  // };

  // useEffect(() => {
  //   createDataChildInfo(valueInfo);
  // }, [createDataChildInfo, valueInfo]);

  const toggleCheck = () => {
    createDataChildContIsCheck(prevIsCheck => !prevIsCheck);
  };

  // useEffect(() => {
  //   createDataChildContIsCheck(isCheck);
  // }, [createDataChildContIsCheck, isCheck]);

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
        {/* <ButtonNext */}
        {/*  className={style.btnNext} */}
        {/*  onClick={toggleTabNext} */}
        {/*  disabled={!valueInfo.mainName} */}
        {/* /> */}
        {/* <Button */}
        {/*  disabled={!valueInfo.mainName} */}
        {/*  className={classnames({ active: activeTab === 2 },
        style.btnNext)} */}
        {/*  onClick={toggleTabNext} */}
        {/*  color="success" */}
        {/* > */}
        {/*  next */}
        {/* </Button> */}
        <SuccessButton
          className={style.btnNext}
          onClick={toggleTabNext}
          disabled={!valueInfo.mainName}
        />
      </ButtonGroup>
    </AvForm>
  );
};
BasicInformation.propTypes = {
  // activeTab: PropTypes.number,
  isCheck: PropTypes.bool,
  toggleTabNext: PropTypes.func,
  // createDataChildInfo: PropTypes.func,
  handleChangeInfo: PropTypes.func,
  createDataChildContIsCheck: PropTypes.func,
  valueInfo: PropTypes.shape({
    mainName: PropTypes.string,
    description: PropTypes.string,
    props: PropTypes.node,
  }),
};
BasicInformation.defaultProps = {
  // activeTab: 1,
  isCheck: false,
  toggleTabNext: () => {},
  // createDataChildInfo: () => {},
  handleChangeInfo: () => {},
  createDataChildContIsCheck: () => {},
  valueInfo: {},
};

export default BasicInformation;

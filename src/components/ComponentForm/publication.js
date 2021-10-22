import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from '../CSS/tabs.module.css';

const Publication = ({
  activeTab,
  toggleTab,
  valueInfo,
  isCheck,
  valueContact,
  imgFile,
  ...props
}) => {
  const [check, setCheck] = useState([]);
  const [modal, setModal] = useState(false);
  //  eslint-disable-next-line
  const { buttonLabel, className } = props;
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  //
  // function handleClick() {
  //     forceUpdate();
  // }

  // const handleChange = (checked)=>{
  //     // e.preventDefault()
  //
  //     // const value = (e.target.value)
  //     // console.log(e.target.value)
  //
  //     // setChecked( [...checked,value])
  //
  //
  //     props.createDataChild(valueTab)
  //     // console.log(checked)
  // }
  const toggleImage = () => {};

  const handleChange = e => {
    // setCheck(e.target.name)
    //
    // // let checkbox = Input.checkbox
    // for (let i = 0; i <= check.length; i++) {
    //
    //         check.filter(value => value !== undefined )
    //
    //     setCheck( prevCheck=>[prevCheck,check])
    //
    //     // checkValue.push(checkbox[i])
    //     // setCheckValue([...checkValue,check[i]])
    //     // props.createDataChildPublicCheck([check])
    // }
    // console.log([check])
    setCheck(prevCheck => {
      const checkInArr = prevCheck.some(check => check === e.target.name);

      return checkInArr
        ? [...prevCheck].filter(check => check !== e.target.name)
        : [...prevCheck, e.target.name];
    });
  };

  // const handleSubmit=(event)=>{
  //
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     // FormData={valueTab:props.valueTab ,
  //     valueData:props.valueData , imgFile:props.imgFile , check}
  //     // formData.append(props.valueTab,props.imgFile)
  //     console.log(formData)
  //
  // }

  // const arr = {valueInfo,valueData,imgFile,check}
  // console.log(valueTab , valueData , imgFile , check)
  // eslint-disable-next-line max-len
  const objProps = { ...valueInfo, isCheck, ...valueContact, imgFile, check };
  // const objProps = { ...props, check };
  // const objProps = { ...props, check };

  //   const handleChange =(value) => {
  // console.log(value)
  //   }

  //  // Array.isArray(objProps)
  // const valueArr = Object.entries(objProps)
  //     .map(([key,value]) => (<span>{key}</span>))
  // console.log(valueTab,valueData,imgFile,check)
  // console.log(valueArr)

  // const rendFile = () =>{
  //
  //         return(
  //             <div>
  //                 <div>{props.valueTab}</div>
  //                 <div>{props.valueData}</div>
  //                 <div>{props.imgFile}</div>
  //             </div>
  //         )
  //
  // }

  // ПЕРЕВІРКА  isCheck
  //     const isArray = Array.isArray(value);
  //     const isString = typeof value === 'string';
  //
  //     const isStringOrArray = isArray || isString;
  //
  //     const hasLength = value => isStringOrArray ? value.length : true;
  //     const keyIsNotFile = key => key !== 'imgFile';
  //     eslint-disable-next-line max-len
  //     const condition = (key, value) => keyIsNotFile(key) && value && hasLength(value);

  return (
    <div className={style.body}>
      <Form>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 1 "
                checkbox="Услуга 1"
              />{' '}
              Услуга 1
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 2 "
                checkbox="Услуга 2"
              />{' '}
              Услуга 2
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 3 "
                checkbox="Услуга 3"
              />{' '}
              Услуга 3
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 4 "
                checkbox="Услуга 4"
              />{' '}
              Услуга 4
            </div>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className={style.check}>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Услуга 5 "
                checkbox="Услуга 5"
              />{' '}
              Услуга 5
            </div>
          </Label>
        </FormGroup>

        <FormGroup check>
          <ButtonGroup>
            <Button
              className={classnames({ active: activeTab === '3' }, style.btn)}
              onClick={() => {
                toggleTab('3');
              }}
              color="warning"
            >
              Prev
            </Button>
            <Button className={style.btn} color="info" onClick={toggle}>
              Save
            </Button>
          </ButtonGroup>
        </FormGroup>
        {/* <FormGroup check > */}
        {/* <ButtonGroup> */}
        {/* <Button className={style.btn}  color={'warning'}>Prev</Button> */}
        {/* <Button className={style.btn} color={'info'}>Save</Button> */}
        {/* </ButtonGroup> */}
        {/*    </FormGroup> */}
      </Form>
      <div>
        {/* <div> */}
        {/*    <span className={style.remove}>x</span> */}
        {/* </div> */}
        {/* <div> */}
        {/*     <h3>Ваше объявление</h3> */}
        {/* </div> */}

        {/* { */}
        {/*     Object.entries(objProps).map(([key,value])=> { */}
        {/*      return  <div> */}

        {/* <div  className={style.wid}><div>{key}</div><input
        key={key}  value={value}/> </div> */}
        {/*                         /!*<img src={value}/>*!/ */}
        {/*                    /!*key={key}*!/ */}
        {/*                    /!*property={key}*!/ */}
        {/*                    /!* value={Number(value)}*!/ */}
        {/*          </div> */}
        {/*    }) */}
        {/* } */}
        {/* { */}
        {/*    Object.entries(objProps).map(([key, value]) =>
              <div> <img key={key} src={value} /></div>) */}
        {/* } */}

        <div>
          {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle} close={closeBtn}>
              Ваше объявление
            </ModalHeader>

            <ModalBody>
              {/* { */}
              {/*    Object.entries(objProps) */}
              {/*  // .filter((key,value) =>
                     key === props.imgFile
                     && value === props.imgFile.value ) */}
              {/*        .filter(([key, value]) => { */}

              {/*            return key === 'imgFile'; */}
              {/*            console.log(key === 'imgFile') */}
              {/*        }) */}
              {/*   // .filter((key,value) => { if(key !== props.imgFile)
                       return false}) */}
              {/*        .map(([key, value]) => { */}
              {/*            console.log(value) */}
              {/*            return( */}
              {/*                <div> */}
              {/*                    {value.map((src, i) => ( */}
              {/*        <img className={style.img} key={i} src={src} */}
              {/*                             alt={'No'}/> */}
              {/*                    ))} */}
              {/*                </div> */}
              {/*            ) */}
              {/*        }) */}

              {/* } */}

              {/* {objProps.imgFile} */}

              {Object.entries(objProps)
                // .filter((key,value) => key !== props.imgFile  &&
                //  value !== imgFile.value )
                .filter(([key, value]) => {
                  return (
                    key !== 'imgFile' &&
                    value &&
                    (typeof value === 'string' || Array.isArray(value)
                      ? value.length
                      : true)
                  );
                })

                .map(([key, value]) => {
                  return (
                    <div key={key.toString()}>
                      <div className={style.wid}>
                        <b>{key} :</b>
                        <span className={style.modInput}>
                          <i>{value?.toString()}</i>
                        </span>

                        {/* <input key={key} value={value}
                            className={style.modInput}/> */}
                      </div>
                    </div>
                  );
                })}

              {objProps.imgFile.map((src, i) => (
                <div
                  key={i.toString()}
                  onClick={toggleImage}
                  className={style.closeImage}
                >
                  {/* <button className={style.btnClose}>&times;</button> */}
                  <img className={style.img} key={i} src={src} alt="⚽" />
                </div>
              ))}

              {/* { */}
              {/*    Object.entries(objProps) */}
              {/*        // .filter((key,value) => key === props.imgFile
                          && value === props.imgFile.value ) */}
              {/*        .filter(key=> key  ===  imgFile) */}
              {/*        // .filter((key,value) => { if(key !== props.imgFile)
                          return false}) */}
              {/*        .map(([key, value]) =>  <div>
                         <img className={style.img}
                         key={key} src={value} alt={'No'}/></div>) */}

              {/* } */}
            </ModalBody>
            <ModalFooter>
              {/* <Button color="primary" onClick={toggle}>
              Do Something</Button>{' '} */}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};
Publication.propTypes = {
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
  valueInfo: PropTypes.shape({
    mainName: PropTypes.string,
    description: PropTypes.string,
  }),
  isCheck: PropTypes.bool,
  valueContact: PropTypes.shape({
    telephone: PropTypes.string,
    email: PropTypes.string,
  }),
  imgFile: PropTypes.array,
};
Publication.defaultProps = {
  activeTab: '',
  toggleTab: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};
export default Publication;

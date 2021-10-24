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
import style from '../style/tabs.module.css';

const Publication = ({
  activeTab,
  toggleTab,
  valueInfo,
  isCheck,
  valueContact,
  imgFile,
  className,
}) => {
  const [check, setCheck] = useState([]);
  const [modal, setModal] = useState(false);
  // const { buttonLabel, className } = props;
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const toggleImage = () => {};

  const handleChange = e => {
    setCheck(prevCheck => {
      const checkInArr = prevCheck.some(check => check === e.target.name);

      return checkInArr
        ? prevCheck.filter(check => check !== e.target.name)
        : [...prevCheck, e.target.name];
    });
  };

  const objProps = { ...valueInfo, isCheck, ...valueContact, imgFile, check };
  // const objProps = { ...props, check };
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
      </Form>
      <div>
        <div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle} close={closeBtn}>
              Ваше объявление
            </ModalHeader>

            <ModalBody>
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
                  <img className={style.img} key={i} src={src} alt="⚽" />
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
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
  className: PropTypes.string,
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
  imgFile: PropTypes.arrayOf(PropTypes.string),
};
Publication.defaultProps = {
  activeTab: '',
  className: '',
  toggleTab: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};
export default Publication;

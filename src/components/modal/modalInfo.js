import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import style from '../style/tabs.module.css';

const ModalInfo = ({ objProps, toggle, modal }) => {
  const showModalInfo = Object.entries(objProps)
    .filter(([key, value]) => {
      if (
        key !== 'imgFile' &&
        value &&
        (typeof value === 'string' || Array.isArray(value))
      ) {
        return value.length;
      }
      return null;
      // key !== 'imgFile' &&
      // value &&
      // (typeof value === 'string' || Array.isArray(value)
      //   ? value.length
      //   : true)
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
    });

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={closeBtn}>
        Ваше объявление
      </ModalHeader>

      <ModalBody>
        {showModalInfo}
        {objProps.imgFile.map((src, i) => (
          <div key={i.toString()} className={style.closeImage}>
            <img className={style.img} key={i} src={src} alt="img" />
          </div>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
ModalInfo.propTypes = {
  objProps: PropTypes.shape({
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
ModalInfo.defaultProps = {
  toggle: () => {},
  modal: false,
};

export default ModalInfo;

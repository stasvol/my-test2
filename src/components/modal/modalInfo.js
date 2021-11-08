import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import style from '../../style/tabs.module.css';

const ModalInfo = ({ objProps, toggle, modal }) => {
  const showModalInfo = Object.entries(objProps)
    .filter(([key, value]) => {
      const valueLength =
        typeof value === 'string' || Array.isArray(value) ? value.length : true;
      if (key !== 'imgFile' && value) return valueLength;
      return false;
      // if (
      //   key !== 'imgFile' &&
      //   value &&
      //   (typeof value === 'string' || Array.isArray(value))
      // ) {
      //   return value.length;
      // }
      // return key !== 'imgFile';

      // if (key !== 'imgFile' && value) {
      //   if (typeof value === 'string' || Array.isArray(value)) {
      //     return value.length;
      //   }
      //   return true;
      // }
      // return key !== 'imgFile';
      //
      // return (
      //   key !== 'imgFile' &&
      //   value &&
      //   (typeof value === 'string' || Array.isArray(value)
      //     ? value.length
      //     : true)
      // );
    })

    .map(([key, value]) => {
      return (
        <div key={key.toString()}>
          <div className={style.wid}>
            <b>{key} :</b>
            <span className={style.modInput}>
              <i>{value?.toLocaleString()}</i>
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
        {objProps.imgFile.map(src => (
          <div
            key={Math.floor(Math.random() * 10)}
            className={style.closeImage}
          >
            <img
              className={style.img}
              key={Math.ceil(Math.random({ src }) * 10)}
              src={src}
              alt="img"
            />
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

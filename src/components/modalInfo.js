import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SecondaryButton } from './baseButtons';

import style from '../styles/tabs.module.css';

const ModalInfo = ({
  showModalInfo,
  infoProps: { imgFile },
  toggle,
  modal,
}) => {
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
        {showModalInfo?.map(({ key, value }) => (
          <div key={key.toString()}>
            <div>
              <b>{key} :</b>
              <span className={style.modalInput}>
                <i>{value?.toLocaleString()}</i>
              </span>
            </div>
          </div>
        ))}
        {imgFile.map((src, id) => (
          <img
            className={style.img}
            key={`${src}${id.toString()}`}
            src={src}
            alt="img"
          />
        ))}
      </ModalBody>
      <ModalFooter>
        <SecondaryButton className={style.btnInfo} onClick={toggle}>
          cancel
        </SecondaryButton>
      </ModalFooter>
    </Modal>
  );
};

ModalInfo.propTypes = {
  infoProps: PropTypes.shape({
    imgFile: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  showModalInfo: PropTypes.arrayOf(
    PropTypes.shape({
      mainName: PropTypes.string,
      description: PropTypes.string,
      telephone: PropTypes.string,
      email: PropTypes.string,
      imgFile: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  toggle: PropTypes.func,
  modal: PropTypes.bool,
};

ModalInfo.defaultProps = {
  toggle: () => {},
  modal: false,
};

export default ModalInfo;

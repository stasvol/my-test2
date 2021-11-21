import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import style from '../style/tabs.module.css';

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
            <div className={style.wid}>
              <b>{key} :</b>
              <span className={style.modInput}>
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
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
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

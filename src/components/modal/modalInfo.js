import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import style from '../../style/tabs.module.css';

const ModalInfo = ({ infoProps, toggle, modal }) => {
  const showModalInfo = Object.entries(infoProps)
    .filter(([key, value]) => {
      const valueLength =
        typeof value === 'string' || Array.isArray(value) ? value.length : true;
      if (key !== 'imgFile' && value) return valueLength;
      return false;
    })
    .map(([key, value]) => (
      <div key={key.toString()}>
        <div className={style.wid}>
          <b>{key} :</b>
          <span className={style.modInput}>
            <i>{value?.toLocaleString()}</i>
          </span>
        </div>
      </div>
    ));

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
        {infoProps.imgFile.map((src, id) => (
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

import PropTypes from 'prop-types';

import ModalInfo from '../components/modalInfo';

// import style from '../style/tabs.module.css';

const ContainerModalInfo = ({ infoProps, toggle, modal }) => {
  const showModalInfo = Object.entries(infoProps)
    .filter(([key, value]) => {
      const valueLength =
        typeof value === 'string' || Array.isArray(value) ? value.length : true;
      if (key !== 'imgFile' && value) return valueLength;
      return false;
    })
    .map(([key, value]) => ({ key, value }));
  // .map(([key, value]) => (
  //   <div key={key.toString()}>
  //     <div className={style.wid}>
  //       <b>{key} :</b>
  //       <span className={style.modInput}>
  //         <i>{value?.toLocaleString()}</i>
  //       </span>
  //     </div>
  //   </div>
  // ));
  return (
    <ModalInfo
      showModalInfo={showModalInfo}
      infoProps={infoProps}
      toggle={toggle}
      modal={modal}
    />
  );
};
ContainerModalInfo.propTypes = {
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
ContainerModalInfo.defaultProps = {
  toggle: () => {},
  modal: false,
};

export default ContainerModalInfo;

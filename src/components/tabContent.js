import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, TabPane } from 'reactstrap';
import BasicInformation from './basicInformation';
import ContactInformation from './contactInformation';
import PhotoFile from './photoFiles';
import Publication from './publication';

const ContentsTabs = ({
  createDataChildInfo,
  createDataChildContIsCheck,
  valueInfo,
  handleChangeInfo,
  isCheck,
  toggleTabNext,
  createDataChildContact,
  valueContact,
  handleChangeContact,
  toggleTabPrev,
  createDataChildImg,
  imgFile,
  activeTab,
}) => {
  const tabGetContent = (id, props) => {
    switch (id) {
      case 'basicInfo':
        return <BasicInformation {...props} />;
      case 'contactInfo':
        return <ContactInformation {...props} />;
      case 'photoInfo':
        return <PhotoFile {...props} />;
      case 'publicInfo':
        return <Publication {...props} />;

      default:
        return null;
    }
  };

  const tabContents = [
    {
      title: 'Основная информация:',
      id: 'basicInfo',
      props: {
        createDataChildInfo,
        createDataChildContIsCheck,
        valueInfo,
        handleChangeInfo,
        isCheck,
        toggleTabNext,
      },
    },
    {
      title: 'Контактная информация:',
      id: 'contactInfo',
      props: {
        createDataChildContact,
        valueContact,
        handleChangeContact,
        toggleTabNext,
        toggleTabPrev,
      },
    },
    {
      title: 'Добавить фотографию:',
      id: 'photoInfo',
      props: { createDataChildImg, imgFile, toggleTabPrev, toggleTabNext },
    },
    {
      title: 'Публикация:',
      id: 'publicInfo',
      props: {
        activeTab,
        valueInfo,
        isCheck,
        valueContact,
        imgFile,
        toggleTabPrev,
      },
    },
  ];

  return (
    <div>
      {tabContents.map(({ title, id, props }, i) => (
        <TabPane tabId={i + 1} key={`${title}${id}`}>
          <Row>
            <Col sm="12">
              <h4>{title}</h4>
              {tabGetContent(id, props)}
            </Col>
          </Row>
        </TabPane>
      ))}
    </div>
  );
};
ContentsTabs.propTypes = {
  activeTab: PropTypes.number,
  toggleTabPrev: PropTypes.func,
  createDataChildInfo: PropTypes.func,
  createDataChildContIsCheck: PropTypes.func,
  handleChangeInfo: PropTypes.func,
  toggleTabNext: PropTypes.func,
  handleChangeContact: PropTypes.func,
  createDataChildImg: PropTypes.func,
  createDataChildContact: PropTypes.func,
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
ContentsTabs.defaultProps = {
  activeTab: 1,
  toggleTabPrev: () => {},
  createDataChildInfo: () => {},
  createDataChildContIsCheck: () => {},
  handleChangeInfo: () => {},
  toggleTabNext: () => {},
  createDataChildContact: () => {},
  handleChangeContact: () => {},
  createDataChildImg: () => {},
  valueInfo: {},
  isCheck: true,
  valueContact: {},
  imgFile: [],
};
export default ContentsTabs;

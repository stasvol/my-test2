import { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, TabPane } from 'reactstrap';

import contentForTabs from './contentForTabs';
import { FullWidthCol } from '../components/fullWidthCol';

const ContentsTabs = ({
  basicInfoProps,
  contactInfoProps,
  photoInfoProps,
  publicInfoProps,
}) => {
  const tabContents = [
    {
      title: 'Основная информация:',
      id: 'basicInfo',
      props: basicInfoProps,
    },
    {
      title: 'Контактная информация:',
      id: 'contactInfo',
      props: contactInfoProps,
    },
    {
      title: 'Добавить фотографию:',
      id: 'photoInfo',
      props: photoInfoProps,
    },
    {
      title: 'Публикация:',
      id: 'publicInfo',
      props: publicInfoProps,
    },
  ];

  return (
    <>
      {tabContents.map(({ title, id, props }, i) => (
        <TabPane tabId={i + 1} key={`${title}${id}`}>
          <Row>
            <FullWidthCol>
              <h4>{title}</h4>
              {contentForTabs(id, props)}
            </FullWidthCol>
          </Row>
        </TabPane>
      ))}
    </>
  );
};

ContentsTabs.propTypes = {
  basicInfoProps: PropTypes.shape({
    createDataChildInfo: PropTypes.func,
    createDataChildContIsCheck: PropTypes.func,
    handleChangeInfo: PropTypes.func,
    toggleTab: PropTypes.func,
    isCheck: PropTypes.bool,
    toggleTabNext: PropTypes.func,
    valueInfo: PropTypes.shape({
      mainName: PropTypes.string,
      description: PropTypes.string,
    }),
  }),

  contactInfoProps: PropTypes.shape({
    createDataChildContact: PropTypes.func,
    handleChangeContact: PropTypes.func,
    toggleTabPrev: PropTypes.func,
    toggleTabNext: PropTypes.func,
    valueContact: PropTypes.shape({
      telephone: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
  photoInfoProps: PropTypes.shape({
    createDataChildImg: PropTypes.func,
    imgFile: PropTypes.arrayOf(PropTypes.string),
  }),
  publicInfoProps: PropTypes.shape({
    activeTab: PropTypes.number,
    isCheck: PropTypes.bool,
    toggleTab: PropTypes.func,
  }),
};

ContentsTabs.defaultProps = {
  basicInfoProps: {},
  contactInfoProps: {},
  photoInfoProps: {},
  publicInfoProps: {},
};

export default memo(ContentsTabs);

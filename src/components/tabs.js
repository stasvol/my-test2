import React from 'react';
import classnames from 'classnames';
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import BasicInformation from './basicInformation';
import ContactInformation from './contactInformation';
import PhotoFile from './photoFiles';
import Publication from './publication';
import useActiveTab from '../hooks/useActiveTab';
// import useBasicValueInfo from '../hooks/useValueInfo';
// import useBasicIsCheck from '../hooks/useIsCheck';
import useUniversalHook from '../hooks/universalHook';
// import usePhotoImgFile from '../hooks/usePhotoImgFile';
// import useContactValue from '../hooks/useContactValue';
import style from '../style/tabs.module.css';

const mainNameDescription = {
  mainName: '',
  description: '',
};
const contactTelephoneEmail = {
  telephone: '',
  email: '',
};

const Tabs = () => {
  const { activeTab, toggleTabPrev, toggleTabNext } = useActiveTab();
  const [valueInfo, createDataChildInfo] = useUniversalHook(
    mainNameDescription,
  );
  const [isCheck, createDataChildContIsCheck] = useUniversalHook(false);
  const [imgFile, createDataChildImg] = useUniversalHook([]);
  const [valueContact, createDataChildContact] = useUniversalHook(
    contactTelephoneEmail,
  );

  const arrTab = [
    { name: 'Tab 1', id: 1 },
    { name: 'Tab 2', id: 2 },
    { name: 'Tab 3', id: 3 },
    { name: 'Tab 4', id: 4 },
  ];

  return (
    <div>
      <Container className="mt-3">
        <Nav tabs className={style.nav}>
          {arrTab.map(tab => {
            return (
              <NavItem className={style.botton} key={tab.id + tab.name}>
                <NavLink
                  disabled
                  id={tab.id}
                  className={classnames({ active: activeTab === 1 })}
                  onClick={toggleTabPrev}
                >
                  {tab.name}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={1}>
            <Row>
              <Col sm="12">
                <h4>Основная информация:</h4>
                <BasicInformation
                  createDataChildInfo={createDataChildInfo}
                  createDataChildContIsCheck={createDataChildContIsCheck}
                  // toggleTab={toggleTab}
                  activeTab={activeTab}
                  valueInfo={valueInfo}
                  // useBasicValueInfo={useBasicValueInfo}
                  isCheck={isCheck}
                  // useBasicIsCheck={useBasicIsCheck}
                  toggleTabNext={toggleTabNext}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={2}>
            <Row>
              <Col sm="12">
                <h4>Контактная информация:</h4>
                <ContactInformation
                  createDataChildContact={createDataChildContact}
                  // toggleTab={toggleTab}
                  activeTab={activeTab}
                  valueContact={valueContact}
                  // useContactValue={useContactValue}
                  toggleTabPrev={toggleTabPrev}
                  toggleTabNext={toggleTabNext}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={3}>
            <Row>
              <Col sm="12">
                <h4>Добавить фотографию:</h4>
                <PhotoFile
                  createDataChildImg={createDataChildImg}
                  // toggleTab={toggleTab}
                  activeTab={activeTab}
                  imgFile={imgFile}
                  // usePhotoImgFile={usePhotoImgFile}
                  toggleTabPrev={toggleTabPrev}
                  toggleTabNext={toggleTabNext}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={4}>
            <Row>
              <Col sm="12">
                <h4>Публикация:</h4>
                <Publication
                  valueInfo={valueInfo}
                  isCheck={isCheck}
                  // useBasicIsCheck={useBasicIsCheck}
                  valueContact={valueContact}
                  imgFile={imgFile}
                  // toggleTab={toggleTab}
                  activeTab={activeTab}
                  toggleTabPrev={toggleTabPrev}
                />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

export default Tabs;

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
import useActiveTab from '../hooks/useActiveTab';
import useUniversalHook from '../hooks/universalHook';
import BasicInformation from './basicInformation';
import ContactInformation from './contactInformation';
import PhotoFile from './photoFiles';
import Publication from './publication';
import arrTab from '../dataComponent/tabArrTabs';
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
                  activeTab={activeTab}
                  valueInfo={valueInfo}
                  isCheck={isCheck}
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
                  activeTab={activeTab}
                  valueContact={valueContact}
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
                  activeTab={activeTab}
                  imgFile={imgFile}
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
                  valueContact={valueContact}
                  imgFile={imgFile}
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

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
import BasicInformation from './componentForm/basicInformation';
import ContactInformation from './componentForm/contactInformation';
import PhotoFile from './componentForm/photoFiles';
import Publication from './componentForm/publication';
import useActiveTab from './hooks/useActiveTab';
import useBasicValueInfo from './hooks/useValueInfo';
import useBasicIsCheck from './hooks/useIsCheck';
import usePhotoImgFile from './hooks/usePhotoImgFile';
import useContactValue from './hooks/useContactValue';
import style from './style/tabs.module.css';

const Tabs = () => {
  // const [activeTab, setActiveTab] = useState('1');
  const [activeTab, toggleTab] = useActiveTab();
  // const [valueInfo, setValueInfo] = useState();
  const [valueInfo, createDataChildInfo] = useBasicValueInfo();
  // const [isCheck, setIsCheck] = useState(false);
  const [isCheck, createDataChildContIsCheck] = useBasicIsCheck();
  // const [imgFile, setImgFile] = useState([]);
  const [imgFile, createDataChildImg] = usePhotoImgFile();
  // const [valueContact, setValueContact] = useState();
  const [valueContact, createDataChildContact] = useContactValue();
  // const [, setCheck] = useState();

  // const toggleTab = tab => {
  //   if (activeTab === tab) return;
  //   setActiveTab(tab);
  // };

  // const clickTab = () => {
  //   toggleTab(activeTab);
  // };

  // const createDataChildInfo = value => {
  //   setValueInfo(value);
  //   // setDescription(value)
  // };

  // const createDataChildContact = value => {
  //   setValueContact(value);
  // };

  // const createDataChildImg = value => {
  //   setImgFile(value);
  // };

  // const createDataChildContIsCheck = value => {
  //   setIsCheck(value);
  // };

  const createDataChildPublicCheck = value => {
    createDataChildContIsCheck(value);
  };

  return (
    <div>
      <Container className="mt-3">
        <Nav tabs className={style.nav}>
          <NavItem className={style.botton}>
            <NavLink
              // disabled
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggleTab('1');
              }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // disabled
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggleTab('2');
              }}
            >
              Tab2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // disabled
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                toggleTab('3');
              }}
            >
              Tab3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // disabled
              className={classnames({ active: activeTab === '4' })}
              onClick={() => {
                toggleTab('4');
              }}
            >
              Tab4
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Основная информация:</h4>
                <BasicInformation
                  createDataChildInfo={createDataChildInfo}
                  createDataChildContIsCheck={createDataChildContIsCheck}
                  toggleTab={toggleTab}
                  activeTab={activeTab}
                  valueInfo={valueInfo}
                  useBasicValueInfo={useBasicValueInfo}
                  isCheck={isCheck}
                  useBasicIsCheck={useBasicIsCheck}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Контактная информация:</h4>
                <ContactInformation
                  createDataChildContact={createDataChildContact}
                  toggleTab={toggleTab}
                  activeTab={activeTab}
                  valueContact={valueContact}
                  useContactValue={useContactValue}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Добавить фотографию:</h4>
                <PhotoFile
                  createDataChildImg={createDataChildImg}
                  toggleTab={toggleTab}
                  activeTab={activeTab}
                  imgFile={imgFile}
                  usePhotoImgFile={usePhotoImgFile}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h4>Публикация:</h4>
                <Publication
                  createDataChildPublicCheck={createDataChildPublicCheck}
                  valueInfo={valueInfo}
                  isCheck={isCheck}
                  useBasicIsCheck={useBasicIsCheck}
                  valueContact={valueContact}
                  imgFile={imgFile}
                  toggleTab={toggleTab}
                  activeTab={activeTab}
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

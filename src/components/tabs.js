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
import contactTelephoneEmail from '../dataComponent/contactTelephone';
import mainNameDescription from '../dataComponent/mainNameDescription';
import style from '../style/tabs.module.css';
// import classesStyle from '../style/styleComponent'

const Tabs = () => {
  const { activeTab, toggleTabPrev, toggleTabNext } = useActiveTab();
  const [valueInfo, createDataChildInfo, handleChangeInfo] = useUniversalHook(
    mainNameDescription,
  );
  const [isCheck, createDataChildContIsCheck] = useUniversalHook(false);
  const [imgFile, createDataChildImg] = useUniversalHook([]);
  const [
    valueContact,
    createDataChildContact,
    handleChangeContact,
  ] = useUniversalHook(contactTelephoneEmail);

  const getTabContent = (id, props) => {
    switch (id) {
      case 'basicInfo':
        return <BasicInformation {...props} id={id} />;
      case 'contactInfo':
        return <ContactInformation {...props} id={id} />;
      case 'photoInfo':
        return <PhotoFile {...props} id={id} />;
      case 'publicInfo':
        return <Publication {...props} id={id} />;

      default:
        return null;
    }
  };

  const tabContent = [
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
      <Container className="mt-3">
        <Nav tabs className={style.nav}>
          {arrTab.map(({ name, id }) => {
            return (
              <NavItem className={style.botton} key={`${id}${name}`}>
                <NavLink
                  disabled
                  id={id}
                  className={classnames({ active: activeTab === 1 })}
                  onClick={toggleTabPrev}
                >
                  {name}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabContent.map(({ title, id, props }, i) => (
            <TabPane tabId={i + 1} key={`${title}${id}`}>
              <Row>
                <Col sm="12">
                  <h4>{title}</h4>
                  {getTabContent(id, props)}
                  {/* <BasicInformation */}
                  {/* createDataChildInfo={createDataChildInfo} */}
                  {/* createDataChildContIsCheck=
                  {createDataChildContIsCheck} */}
                  {/* // activeTab={activeTab} */}
                  {/* valueInfo={valueInfo} */}
                  {/* isCheck={isCheck} */}
                  {/* toggleTabNext={toggleTabNext} */}
                  {/* /> */}
                </Col>
              </Row>
            </TabPane>
          ))}
          {/* <TabPane tabId={2}> */}
          {/*  <Row> */}
          {/*    <Col sm="12"> */}
          {/*      <h4>Контактная информация:</h4> */}
          {/*      <ContactInformation */}
          {/*        createDataChildContact={createDataChildContact} */}
          {/*        // activeTab={activeTab} */}
          {/*        valueContact={valueContact} */}
          {/*        toggleTabPrev={toggleTabPrev} */}
          {/*        toggleTabNext={toggleTabNext} */}
          {/*      /> */}
          {/*    </Col> */}
          {/*  </Row> */}
          {/* </TabPane> */}
          {/* <TabPane tabId={3}> */}
          {/*  <Row> */}
          {/*    <Col sm="12"> */}
          {/*      <h4>Добавить фотографию:</h4> */}
          {/*      <PhotoFile */}
          {/*        createDataChildImg={createDataChildImg} */}
          {/*        // activeTab={activeTab} */}
          {/*        imgFile={imgFile} */}
          {/*        toggleTabPrev={toggleTabPrev} */}
          {/*        toggleTabNext={toggleTabNext} */}
          {/*      /> */}
          {/*    </Col> */}
          {/*  </Row> */}
          {/* </TabPane> */}
          {/* <TabPane tabId={4}> */}
          {/*  <Row> */}
          {/*    <Col sm="12"> */}
          {/*      <h4>Публикация:</h4> */}
          {/*      <Publication */}
          {/*        valueInfo={valueInfo} */}
          {/*        isCheck={isCheck} */}
          {/*        valueContact={valueContact} */}
          {/*        imgFile={imgFile} */}
          {/*        activeTab={activeTab} */}
          {/*        toggleTabPrev={toggleTabPrev} */}
          {/*      /> */}
          {/*    </Col> */}
          {/*  </Row> */}
          {/* </TabPane> */}
        </TabContent>
      </Container>
    </div>
  );
};

export default Tabs;

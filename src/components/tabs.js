import React, { useState } from 'react';
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
// import PropType from 'prop-types';
import style from './CSS/tabs.module.css';
import BasicInformation from './ComponentForm/basicInformation';
import ContactInformation from './ComponentForm/contactInformation';
import PhotoFile from './ComponentForm/photoFiles';
import Publication from './ComponentForm/publication';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const [valueInfo, setValueInfo] = useState();
  // const [description, setDescription] = useState('');
  const [isCheck, setIsCheck] = useState();
  const [imgFile, setImgFile] = useState([]);
  const [valueContact, setValueContact] = useState();
  const [, setCheck] = useState();

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const createDataChildInfo = value => {
    setValueInfo(value);
    // setDescription(value)
  };

  const createDataChildContact = value => {
    setValueContact(value);
  };

  const createDataChildImg = value => {
    setImgFile(value);
  };

  const createDataChildContIsCheck = value => {
    setIsCheck(value);
  };

  const createDataChildPublicCheck = value => {
    setCheck(value);
  };
  // const newValueTab = () =>{
  //     if (!valueTab ) {
  //         setDisabled(true)
  //     }else if (valueTab) {
  //         setDisabled(false)
  //     }
  // }

  // console.log(valueTab)
  // const handleClick = (tab) => {
  //
  //     // if (activeTab !== tab) {
  //     //     setActiveTab(tab)
  //     //     console.log(tab)
  //     // }
  // }

  return (
    <div>
      <Container className="mt-3">
        <Nav tabs className={style.Nav}>
          <NavItem className={style.Botton}>
            <NavLink
              disabled
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
              disabled
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
              disabled
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
              disabled
              className={classnames({ active: activeTab === '4' })}
              onClick={() => {
                toggleTab('4');
              }}
            >
              Tab4
            </NavLink>
          </NavItem>
          {/* <NavItem> */}
          {/*    <NavLink */}
          {/*        className={classnames({ active: activeTab === '5' })} */}
          {/*        onClick={() => { toggleTab('5'); }}> */}
          {/*        More Tabs */}
          {/*    </NavLink> */}
          {/* </NavItem> */}
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
                />

                {/* <ButtonGroup> */}
                {/* <Button disabled={!valueTab } */}
                {/* className={classnames({active: activeTab === '2' },
                style.btnNext)} */}
                {/*  onClick={() => {toggleTab('2')}}
                color={'success'}>Next</Button> */}
                {/* </ButtonGroup> */}
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
                />
                {/* <FormGroup> */}
                {/* <ButtonGroup> */}
                {/* <Button className={classnames(
                  { active: props.activeTab === '2' },
                    style.btn)} */}
                {/* onClick={() => { props.toggle('2'); }}
                    color={'warning'}>Prev</Button> */}
                {/* <Button  className={classnames(
                  { active: props.activeTab === '4' },
                    style.btn)} */}
                {/* onClick={() => { props.toggle('4'); }}
                color={'success'}>Next</Button> */}
                {/*    </ButtonGroup> */}
                {/* </FormGroup> */}
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
                  valueContact={valueContact}
                  imgFile={imgFile}
                  toggleTab={toggleTab}
                  activeTab={activeTab}
                />
                {/* <FormGroup check > */}
                {/* <ButtonGroup> */}
                {/* <Button className={classnames(
                  { active: props.activeTab === '3' },style.btn)} */}
                {/* onClick={() => { props.toggleTab('3'); }}
                    color={'warning'}>Prev</Button> */}
                {/* <Button onSubmit={handleSubmit} className={style.btn}
                    color={'info'}>Save</Button> */}
                {/* </ButtonGroup> */}
                {/* </FormGroup> */}
              </Col>
            </Row>
          </TabPane>
          {/* <TabPane tabId="5"> */}
          {/* <Row> */}
          {/* <Col sm="6"> */}
          {/* <Card body> */}
          {/* <CardTitle>Special Title Treatment</CardTitle> */}
          {/* <CardText>With supporting text below</CardText> */}
          {/* <Button>Go somewhere</Button> */}
          {/* </Card> */}
          {/* </Col> */}
          {/* <Col sm="6"> */}
          {/* <Card body> */}
          {/* <CardTitle>Special Title Treatment</CardTitle> */}
          {/* <CardText>With supporting text below</CardText> */}
          {/* <Button>Go somewhere</Button> */}
          {/* </Card> */}
          {/* </Col> */}
          {/* </Row> */}
          {/* </TabPane>                  */}
        </TabContent>
      </Container>
      {/* <Nove/> */}
      {/* <Example/> */}
    </div>
  );
};
// Tabs.propType = {
//   activeTab: PropType.string,
//   toggleTab: PropType.func,
//   createDataChildInfo: PropType.func,
//   createDataChildContact: PropType.func,
//   createDataChildImg: PropType.func,
//   createDataChildContIsCheck: PropType.func,
// };
// Tabs.defaultProps = {
//   activeTab: '',
//   toggleTab: () => {},
//   createDataChildInfo: () => {},
//   createDataChildContact: () => {},
//   createDataChildImg: () => {},
//   createDataChildContIsCheck: () => {},
// };

export default Tabs;

// <Container>
//     <TabPane id={'left-tabs-example'}  defaultActiveKey={'one'}>
//         <Row>
//             <Col sm={3}>
//                 <Nav variant={'pills'} className={'flex-column mt-3'}>
//                     <NavItem>
//                         <NavLink eventKey={'one'}>Design</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'two'}>Testing</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'three'}>Programmer</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'first4'}>Strong</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'first5'}>React</NavLink>
//                     </NavItem>
//                 </Nav>
//             </Col>
//             <Col sm={9} className={'flex-column mt-3'} >
//                 <TabContent eventKey={'one'}>
//                     AAAAAAAAAAAAAAAA
//                 </TabContent>
//                 <TabContent  className={'fade'} eventKey={'two'}>
//                     BBBBBBBBBBBBBB
//                 </TabContent>
//                 <TabContent  className={'fade'} eventKey={'three'}>
//                     CCCCCCCCCCCCCCCCCCCCCC
//                 </TabContent>
//                 <TabContent  className={'fade'}  eventKey={'first4'}>
//                     DDDDDDDDDDDDDDDD
//                 </TabContent>
//                 <TabContent  className={'fade'}  eventKey={'first5'}>
//                     AGGGGGGGGGGGGGGG
//                 </TabContent>
//             </Col>
//         </Row>
//     </TabPane>
// </Container>

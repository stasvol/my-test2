import React from 'react';
import classnames from 'classnames';
import { Container, Nav, NavItem, NavLink, TabContent } from 'reactstrap';

import useActiveTab from '../hooks/useActiveTab';
import useFieldValueHook from '../hooks/universalHook';
import arrTab from './constants/tabArrTabs';
import contactTelephoneEmail from './constants/contactTelephone';
import mainNameDescription from './constants/mainNameDescription';
import ContentsTabs from './tabContent';

import style from '../style/tabs.module.css';

const Tabs = () => {
  const { activeTab, toggleTab, toggleTabPrev, toggleTabNext } = useActiveTab();
  const [valueInfo, createDataChildInfo, handleChangeInfo] = useFieldValueHook(
    mainNameDescription,
  );
  const [isCheck, createDataChildContIsCheck] = useFieldValueHook(false);
  const [imgFile, createDataChildImg] = useFieldValueHook([]);
  const [
    valueContact,
    createDataChildContact,
    handleChangeContact,
  ] = useFieldValueHook(contactTelephoneEmail);

  const basicInfoProps = {
    createDataChildInfo,
    createDataChildContIsCheck,
    valueInfo,
    handleChangeInfo,
    isCheck,
    toggleTabNext,
    toggleTab,
  };
  const contactInfoProps = {
    createDataChildContact,
    valueContact,
    handleChangeContact,
    toggleTabNext,
    toggleTabPrev,
  };

  const photoInfoProps = {
    createDataChildImg,
    imgFile,
    toggleTabPrev,
    toggleTabNext,
  };

  const publicInfoProps = {
    activeTab,
    valueInfo,
    isCheck,
    valueContact,
    imgFile,
    toggleTabPrev,
    toggleTab,
  };

  return (
    <div>
      <Container className="mt-3">
        <Nav tabs className={style.nav}>
          {arrTab.map(({ name, id }) => (
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
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          <ContentsTabs
            basicInfoProps={basicInfoProps}
            contactInfoProps={contactInfoProps}
            photoInfoProps={photoInfoProps}
            publicInfoProps={publicInfoProps}
          />
        </TabContent>
      </Container>
    </div>
  );
};

export default Tabs;

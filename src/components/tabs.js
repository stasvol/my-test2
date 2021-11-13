import { useMemo } from 'react';
import classnames from 'classnames';
import { Container, Nav, NavItem, NavLink, TabContent } from 'reactstrap';

import mainNameAndDescription from './constants/mainNameAndDescription';
import contactTelephoneAndEmail from './constants/contactTelephoneAndEmail';
import tabArr from './constants/tabArrTabs';
import useActiveTab from '../hooks/useActiveTab';
import useFieldValueHook from '../hooks/useFieldValueHook';
import ContentsTabs from '../containerTabContent/tabContent';

import style from '../style/tabs.module.css';

const Tabs = () => {
  const { activeTab, toggleTab, toggleTabPrev, toggleTabNext } = useActiveTab();
  const {
    valueField: valueInfo,
    changeValue: createDataChildInfo,
    handleChangeField: handleChangeInfo,
  } = useFieldValueHook(mainNameAndDescription);

  const {
    valueField: isCheck,
    changeValue: createDataChildContIsCheck,
  } = useFieldValueHook(false);
  const {
    valueField: imgFile,
    changeValue: createDataChildImg,
  } = useFieldValueHook([]);

  const {
    valueField: valueContact,
    changeValue: createDataChildContact,
    handleChangeField: handleChangeContact,
  } = useFieldValueHook(contactTelephoneAndEmail);

  const childBasicProps = {
    createDataChildInfo,
    createDataChildContIsCheck,
    handleChangeInfo,
    toggleTabNext,
    toggleTab,
  };
  const basicInfoProps = useMemo(
    () => ({
      ...childBasicProps,
      valueInfo,
      isCheck,
    }),
    [childBasicProps, valueInfo, isCheck],
  );

  const childContactProps = {
    createDataChildContact,
    handleChangeContact,
    toggleTabNext,
    toggleTabPrev,
  };
  const contactInfoProps = useMemo(
    () => ({
      ...childContactProps,
      valueContact,
    }),
    [childContactProps, valueContact],
  );

  const childPhotoProps = {
    createDataChildImg,
    toggleTabPrev,
    toggleTabNext,
  };
  const photoInfoProps = useMemo(
    () => ({
      ...childPhotoProps,
      imgFile,
    }),
    [childPhotoProps, imgFile],
  );

  const childPublicProps = {
    activeTab,
    valueInfo,
    isCheck,
    valueContact,
    imgFile,
  };
  const publicInfoProps = useMemo(
    () => ({
      ...childPublicProps,
      toggleTabPrev,
      toggleTab,
    }),
    [childPublicProps, toggleTabPrev, toggleTab],
  );

  return (
    <div>
      <Container className="mt-3">
        <Nav tabs className={style.nav}>
          {tabArr.map(({ name, id }) => (
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

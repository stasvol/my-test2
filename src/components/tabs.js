import { useMemo, memo } from 'react';
import classnames from 'classnames';
import { Container, Nav, NavItem, NavLink, TabContent } from 'reactstrap';

import {
  mainNameAndDescription,
  contactTelephoneAndEmail,
  tabArr,
} from '../constants/constantsValue';
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

  const childBasicProps = useMemo(
    () => ({
      createDataChildInfo,
      createDataChildContIsCheck,
      handleChangeInfo,
    }),
    [createDataChildInfo, createDataChildContIsCheck, handleChangeInfo],
  );

  const basicInfoProps = useMemo(
    () => ({
      ...childBasicProps,
      toggleTab,
      valueInfo,
      isCheck,
      toggleTabNext,
    }),
    [childBasicProps, valueInfo, isCheck, toggleTab, toggleTabNext],
  );

  const childContactProps = useMemo(
    () => ({
      valueContact,
      createDataChildContact,
      handleChangeContact,
    }),
    [createDataChildContact, handleChangeContact, valueContact],
  );

  const contactInfoProps = useMemo(
    () => ({
      ...childContactProps,
      toggleTabNext,
      toggleTabPrev,
    }),
    [childContactProps, toggleTabNext, toggleTabPrev],
  );

  const childPhotoProps = useMemo(
    () => ({
      createDataChildImg,
      toggleTabPrev,
      toggleTabNext,
    }),
    [createDataChildImg, toggleTabPrev, toggleTabNext],
  );

  const photoInfoProps = useMemo(
    () => ({
      ...childPhotoProps,
      imgFile,
    }),
    [childPhotoProps, imgFile],
  );

  const childPublicProps = useMemo(
    () => ({
      activeTab,
      valueInfo,
      isCheck,
      valueContact,
    }),
    [activeTab, valueInfo, isCheck, valueContact],
  );

  const publicInfoProps = useMemo(
    () => ({
      ...childPublicProps,
      toggleTabPrev,
      toggleTab,
      imgFile,
    }),
    [childPublicProps, toggleTabPrev, toggleTab, imgFile],
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

export default memo(Tabs);

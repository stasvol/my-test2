import { useMemo, memo } from 'react';
import classnames from 'classnames';
import { Container, Nav, NavItem, NavLink, TabContent } from 'reactstrap';

import {
  mainNameAndDescription,
  contactTelephoneAndEmail,
} from '../constants/constantsValue';
import { tabArr } from '../constants/tabArr';
import useActiveTab from '../hooks/useActiveTab';
import useFieldValue from '../hooks/useFieldValue';
import ContentsTabs from './tabContent';

import style from '../style/tabs.module.css';

const Tabs = () => {
  const { activeTab, toggleTab, toggleTabPrev, toggleTabNext } = useActiveTab();

  const {
    valueField: valueInfo,
    changeValue: createDataChildInfo,
    handleChangeField: handleChangeInfo,
  } = useFieldValue(mainNameAndDescription);

  const {
    valueField: isCheck,
    changeValue: createDataChildContIsCheck,
  } = useFieldValue(false);

  const {
    valueField: imgFile,
    changeValue: createDataChildImg,
  } = useFieldValue([]);

  const {
    valueField: valueContact,
    changeValue: createDataChildContact,
    handleChangeField: handleChangeContact,
  } = useFieldValue(contactTelephoneAndEmail);

  const childBasic = useMemo(
    () => ({ createDataChildInfo, handleChangeInfo, valueInfo }),
    [createDataChildInfo, handleChangeInfo, valueInfo],
  );

  const basicInfoProps = useMemo(
    () => ({
      ...childBasic,
      createDataChildContIsCheck,
      toggleTab,
      isCheck,
      toggleTabNext,
    }),
    [childBasic, isCheck, toggleTab, toggleTabNext, createDataChildContIsCheck],
  );

  const childContact = useMemo(
    () => ({ valueContact, createDataChildContact, handleChangeContact }),
    [valueContact, createDataChildContact, handleChangeContact],
  );

  const contactInfoProps = useMemo(
    () => ({ ...childContact, toggleTabNext, toggleTabPrev }),
    [childContact, toggleTabNext, toggleTabPrev],
  );

  const childPhoto = useMemo(() => ({ createDataChildImg, imgFile }), [
    createDataChildImg,
    imgFile,
  ]);

  const photoInfoProps = useMemo(
    () => ({ ...childPhoto, toggleTabPrev, toggleTabNext }),
    [childPhoto, toggleTabPrev, toggleTabNext],
  );

  const childPublic = useMemo(() => ({ toggleTabPrev, toggleTab, activeTab }), [
    toggleTabPrev,
    toggleTab,
    activeTab,
  ]);

  const publicInfoProps = useMemo(
    () => ({ ...childPublic, imgFile, valueInfo, isCheck, valueContact }),
    [childPublic, imgFile, valueInfo, isCheck, valueContact],
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

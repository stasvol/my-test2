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

import style from '../styles/tabs.module.css';

const Tabs = () => {
  const { activeTab, toggleTab, toggleTabPrev, toggleTabNext } = useActiveTab();

  const {
    valueField: valueInfo,
    changeValue: childInfo,
    handleChangeField: handleChangeInfo,
  } = useFieldValue(mainNameAndDescription);

  const { valueField: isCheck, changeValue: childIsCheck } = useFieldValue(
    false,
  );

  const { valueField: imgFile, changeValue: addImg } = useFieldValue([]);

  const {
    valueField: valueContact,
    changeValue: addContact,
    handleChangeField: handleChangeContact,
  } = useFieldValue(contactTelephoneAndEmail);

  const childBasic = useMemo(
    () => ({ childInfo, handleChangeInfo, valueInfo }),
    [childInfo, handleChangeInfo, valueInfo],
  );

  const basicInfoProps = useMemo(
    () => ({ ...childBasic, childIsCheck, toggleTab, isCheck, toggleTabNext }),
    [childBasic, isCheck, toggleTab, toggleTabNext, childIsCheck],
  );

  const childContact = useMemo(
    () => ({ valueContact, addContact, handleChangeContact }),
    [valueContact, addContact, handleChangeContact],
  );

  const contactInfoProps = useMemo(
    () => ({ ...childContact, toggleTabNext, toggleTabPrev }),
    [childContact, toggleTabNext, toggleTabPrev],
  );

  const childPhoto = useMemo(() => ({ addImg, imgFile }), [addImg, imgFile]);

  const photoInfoProps = useMemo(
    () => ({ ...childPhoto, toggleTabPrev, toggleTabNext }),
    [childPhoto, toggleTabPrev, toggleTabNext],
  );

  const childPublic = useMemo(
    () => ({ toggleTabPrev, toggleTab, activeTab, isCheck }),
    [toggleTabPrev, toggleTab, activeTab, isCheck],
  );

  const publicInfoProps = useMemo(
    () => ({ ...childPublic, imgFile, valueInfo, valueContact }),
    [childPublic, imgFile, valueInfo, valueContact],
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

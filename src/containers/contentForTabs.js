import BasicInformation from '../components/basicInformation';
import ContactInformation from '../components/contactInformation';
import ContainerPhotoFile from './containerPhotoFiles';
import ContainerPublication from './containerPublication';

const contentForTabs = (id, props) => {
  switch (id) {
    case 'basicInfo':
      return <BasicInformation {...props} />;
    case 'contactInfo':
      return <ContactInformation {...props} />;
    case 'photoInfo':
      return <ContainerPhotoFile {...props} />;
    case 'publicInfo':
      return <ContainerPublication {...props} />;
    default:
      return null;
  }
};

export default contentForTabs;

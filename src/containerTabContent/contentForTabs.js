import BasicInformation from '../components/basicInformation';
import ContactInformation from '../components/contactInformation';
import PhotoFile from '../components/photoFiles';
import Publication from '../components/publication';

const contentForTabs = (id, props) => {
  switch (id) {
    case 'basicInfo':
      return <BasicInformation {...props} />;
    case 'contactInfo':
      return <ContactInformation {...props} />;
    case 'photoInfo':
      return <PhotoFile {...props} />;
    case 'publicInfo':
      return <Publication {...props} />;
    default:
      return null;
  }
};

export default contentForTabs;

import BasicInformation from '../components/basicInformation';
import ContactInformation from '../components/contactInformation';
import PhotoFileContainer from './photoFileContainer';
import PublicationContainer from './publicationContainer';

const contentForTabs = (id, props) => {
  switch (id) {
    case 'basicInfo':
      return <BasicInformation {...props} />;
    case 'contactInfo':
      return <ContactInformation {...props} />;
    case 'photoInfo':
      return <PhotoFileContainer {...props} />;
    case 'publicInfo':
      return <PublicationContainer {...props} />;
    default:
      return null;
  }
};

export default contentForTabs;

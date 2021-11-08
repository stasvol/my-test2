import React from 'react';
import BasicInformation from './basicInformation';
import ContactInformation from './contactInformation';
import PhotoFile from './photoFiles';
import Publication from './publication';

const tabContentFunc = (
  id,
  basicInfoProps,
  contactInfoProps,
  photoInfoProps,
  publicInfoProps,
) => {
  switch (id) {
    case 'basicInfo':
      return <BasicInformation {...basicInfoProps} />;
    case 'contactInfo':
      return <ContactInformation {...contactInfoProps} />;
    case 'photoInfo':
      return <PhotoFile {...photoInfoProps} />;
    case 'publicInfo':
      return <Publication {...publicInfoProps} />;

    default:
      return null;
  }
};
export default tabContentFunc;

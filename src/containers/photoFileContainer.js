import PropTypes from 'prop-types';

import { fileMaxLength } from '../constants/publicSize';
import PhotoFile from '../components/photoFiles';

const PhotoFileContainer = ({
  addImg,
  imgFile,
  toggleTabPrev,
  toggleTabNext,
}) => {
  const saveFile = ({ target: { files } }) => {
    const filesArr = [...files];

    filesArr.forEach(file => {
      if (!file.type.match('image')) return;

      const reader = new FileReader();

      reader.onload = ({ currentTarget: { result } }) => {
        if (files.length <= fileMaxLength) {
          addImg(prevImgFile => [...prevImgFile, result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const removeImage = file => {
    addImg(prev => prev.filter(img => img !== file));
  };

  return (
    <PhotoFile
      imgFile={imgFile}
      saveFile={saveFile}
      toggleTabPrev={toggleTabPrev}
      toggleTabNext={toggleTabNext}
      removeImage={removeImage}
    />
  );
};

PhotoFileContainer.propTypes = {
  toggleTabPrev: PropTypes.func,
  toggleTabNext: PropTypes.func,
  addImg: PropTypes.func,
  imgFile: PropTypes.arrayOf(PropTypes.string),
};

PhotoFileContainer.defaultProps = {
  toggleTabPrev: () => {},
  toggleTabNext: () => {},
  addImg: () => {},
  imgFile: [],
};

export default PhotoFileContainer;

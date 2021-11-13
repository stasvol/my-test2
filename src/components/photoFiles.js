import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, ButtonGroup } from 'reactstrap';

import { SuccessButton, WarningButton } from './buttons/baseButton';

import style from '../style/tabs.module.css';

const PhotoFile = ({
  createDataChildImg,
  imgFile,
  toggleTabPrev,
  toggleTabNext,
}) => {
  const maxSizeBit = 5 * 1024 * 1024;
  const inputRef = useRef(null);

  const saveFile = ({ target: { files } }) => {
    const filesArr = [...files];

    filesArr.forEach(file => {
      if (!file.type.match('image')) return;

      const reader = new FileReader();

      reader.onload = ({ currentTarget: { result } }) => {
        if (files.length <= 5) {
          createDataChildImg(prevImgFile => [...prevImgFile, result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = file => {
    createDataChildImg(prev => prev.filter(img => img !== file));
  };

  const upload = () => {
    inputRef.current.click();
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleFile">
          <input
            ref={inputRef}
            hidden
            onChange={saveFile}
            type="file"
            name="file"
            id="exampleFile"
            multiple
            maxfilesize={maxSizeBit}
          />
        </Label>
        <Button
          className={style.btnAbsol}
          id="button"
          color="info"
          onClick={upload}
        >
          UPLOAD FILES
        </Button>
      </FormGroup>
      <FormGroup>
        {imgFile.map((file, i) => {
          const removeImgFile = () => removeImage(file);
          return (
            <div key={`${file}${file[i]}`} className={style.closeImage} id={i}>
              <Button onClick={removeImgFile} className={style.btnClose}>
                &times;
              </Button>
              <img i={i} src={file} alt="img" className={style.img} />
            </div>
          );
        })}
      </FormGroup>
      <FormGroup>
        <ButtonGroup>
          <WarningButton className={style.btn} onClick={toggleTabPrev} />
          <SuccessButton className={style.btn} onClick={toggleTabNext} />
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};
PhotoFile.propTypes = {
  toggleTabPrev: PropTypes.func,
  toggleTabNext: PropTypes.func,
  createDataChildImg: PropTypes.func,
  imgFile: PropTypes.arrayOf(PropTypes.string),
};
PhotoFile.defaultProps = {
  toggleTabPrev: () => {},
  toggleTabNext: () => {},
  createDataChildImg: () => {},
  imgFile: [],
};

export default PhotoFile;

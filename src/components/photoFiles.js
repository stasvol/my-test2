import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, ButtonGroup } from 'reactstrap';

import { maxSizeBit } from '../constants/publicSize';
import { SuccessButton, WarningButton } from './baseButton';

import style from '../style/tabs.module.css';

const PhotoFile = ({
  saveFile,
  removeImage,
  imgFile,
  toggleTabPrev,
  toggleTabNext,
}) => {
  const inputRef = useRef(null);

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
          <WarningButton className={style.btn} onClick={toggleTabPrev}>
            prev
          </WarningButton>
          <SuccessButton className={style.btn} onClick={toggleTabNext}>
            next
          </SuccessButton>
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};

PhotoFile.propTypes = {
  toggleTabPrev: PropTypes.func,
  toggleTabNext: PropTypes.func,
  saveFile: PropTypes.func,
  removeImage: PropTypes.func,
  imgFile: PropTypes.arrayOf(PropTypes.string),
};

PhotoFile.defaultProps = {
  toggleTabPrev: () => {},
  toggleTabNext: () => {},
  saveFile: () => {},
  removeImage: () => {},
  imgFile: [],
};

export default PhotoFile;

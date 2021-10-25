import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, ButtonGroup } from 'reactstrap';
import classnames from 'classnames';
import style from '../style/tabs.module.css';

const PhotoFile = ({ activeTab, toggleTab, createDataChildImg }) => {
  const [imgFile, setImgFile] = useState([]);

  const maxSize = 5242880;
  const InputRef = useRef(null);

  const saveFile = ({ target: { files } }) => {
    const filesArr = [...files];

    filesArr.forEach(file => {
      if (!file.type.match('image')) {
        return;
      }
      const reader = new FileReader();

      reader.onload = e => {
        if (files.length <= 5) {
          setImgFile(prevImgFile => [...prevImgFile, e.currentTarget.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = file => {
    setImgFile(prev => prev.filter(img => img !== file));
  };

  useEffect(() => {
    createDataChildImg(imgFile);
  }, [createDataChildImg, imgFile]);

  const upload = () => {
    InputRef.current.click();
    // document.getElementById('exampleFile').click();
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleFile">
          <input
            ref={InputRef}
            hidden
            onChange={saveFile}
            type="file"
            name="file"
            id="exampleFile"
            multiple
            maxfilesize={maxSize}
          />
        </Label>
        <Button
          className={style.btnAbsol}
          id="button"
          color="info"
          onClick={upload}
        >
          Upload files
        </Button>
      </FormGroup>
      <FormGroup>
        {imgFile.map((file, i) => {
          const removeImgFile = () => removeImage(file);
          return (
            <div key={i} className={style.closeImage} id={i}>
              <Button onClick={removeImgFile} className={style.btnClose}>
                &times;
              </Button>
              <img i={i} src={file} alt="img" className={style.img} />
            </div>
          );
        })}
      </FormGroup>
      <FormGroup />
      <FormGroup>
        <ButtonGroup>
          <Button
            className={classnames({ active: activeTab === '2' }, style.btn)}
            onClick={() => {
              toggleTab('2');
            }}
            color="warning"
          >
            Prev
          </Button>

          <Button
            className={classnames({ active: activeTab === '4' }, style.btn)}
            onClick={() => {
              toggleTab('4');
            }}
            color="success"
          >
            Next
          </Button>
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};
PhotoFile.propTypes = {
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
  createDataChildImg: PropTypes.func,
};
PhotoFile.defaultProps = {
  activeTab: '',
  toggleTab: () => {},
  createDataChildImg: () => {},
};

export default PhotoFile;

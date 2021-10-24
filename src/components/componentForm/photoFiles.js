import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, ButtonGroup } from 'reactstrap';
import classnames from 'classnames';
import style from '../style/tabs.module.css';

const PhotoFile = ({ activeTab, toggleTab, createDataChildImg }) => {
  const [, setSelectedFile] = useState();
  const [, setIsSelected] = useState(false);
  const [imgFile, setImgFile] = useState([]);
  const maxSize = 5242880;
  // const [valueTab, setValueTab] = useState('')
  // const [valueTab, setValueTab] = useState('')

  // const handleChange = (e)=>{
  //
  //     e.preventDefault()
  //
  //     const value = (e.target.value)
  //
  //     setValueTab( [...valueTab,value])
  //
  //
  //     // props.createDataChild(imgFile)
  //     // console.log(valueTabOne)
  // }

  const InputRef = useRef(null);

  const saveFile = e => {
    const files = Array.from(e.target.files);
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);

    files.forEach(file => {
      // if (!file.type.match('image')){
      //     return
      // }
      const reader = new FileReader();

      reader.onload = ev => {
        if (e.target.files.length <= 5) {
          setImgFile(prevImgFile => [...prevImgFile, ev.currentTarget.result]);
        }
        // console.log(ev.currentTarget.result)
        // eslint-disable-next-line
        // Input.insertAdjacentHTML('afterend',`< img src=${ev.target.result}/>`)
        // const image =  files.map(file=>  {
        //     return  `<img src="${ev.currentTarget.result}" alt="image"/>`
        // })
        // console.log(image)
      };
      reader.readAsDataURL(file);

      // props.createDataChildImg(imgFile)
      // console.log(file)
    });
    // if (e.target.files.length <= 5) {
    //     const arr =[]
    //     const file = e.target.files
    //      arr.push(file)
    //
    //     arr.map(el => {return  <div><span>{el.name}</span></div>})
    //
    //     // props.addPhotoFile(e.target.files)
    //     console.log(file)
    // }
  };

  const removeImage = file => {
    // const newImage = imgFile.filter((img) => img !== file);
    // setImgFile(newImage)

    setImgFile(prev => prev.filter(img => img !== file));

    // const key = e.target.accessKey
    //      const imgFileArr = [...imgFile]
    //           imgFileArr.splice(key,1)
    //       setImgFile([... imgFileArr])
    //
    //     console.log(imgFileArr)
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
        {imgFile.map((file, i) => (
          <div key={i} className={style.closeImage} id={i}>
            <Button
              onClick={() => removeImage(file)}
              className={style.btnClose}
            >
              &times;
            </Button>
            <img i={i} src={file} alt="img" className={style.img} />
          </div>
        ))}
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

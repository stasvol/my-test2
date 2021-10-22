import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import classnames from 'classnames';
import style from '../CSS/tabs.module.css';
//  eslint-disable-next-line
const PhotoFile = ({ activeTab, toggleTab, createDataChildImg, ...props }) => {
  const [, setSelectedFile] = useState();
  const [, setIsSelected] = useState(false);
  const [imgFile, setImgFile] = useState([]);

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

  // const InputRef = useRef( null );

  // const handleBtnClick = () => {
  //
  //
  //     /*Collecting node-element and performing click*/
  //     InputRef.currentTarget.click();
  //
  // }

  const saveFile = e => {
    // if (!e.target.files.length){
    //     return
    // }
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

  // document.getElementById('button').addEventListener('click',()=>{
  //     document.getElementById('exampleFile').click()
  // })
  //   console.log(imgFile)
  const upload = () => {
    // InputRef.currentTarget.click();
    document.getElementById('exampleFile').click();
  };

  // <div style={{display: 'grid'}}>
  //     <button id='plus' onClick={this.upload}>+</button>
  // <input id='selectImage' hidden type="file" onChange={fileSelectHandler} />
  // </div>
  return (
    <Form>
      <FormGroup>
        <Label for="exampleFile">
          <Input
            hidden
            onChange={saveFile}
            type="file"
            name="file"
            id="exampleFile"
            multiple
            maxfilesize={5242880}
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
            {/* eslint-disable-next-line */}
            <img accessKey={i} src={file} alt="" className={style.img} />{' '}
          </div>
        ))}
      </FormGroup>
      <FormGroup>
        {/* {isSelected ? ( */}
        {/*    <div> */}
        {/*        <p>Filename: {selectedFile.name}</p> */}
        {/*        <p>Filetype: {selectedFile.type}</p> */}
        {/*        <p>Size in bytes: {selectedFile.size}</p> */}
        {/*        <p>lastModified: {selectedFile.lastModified}</p> */}
        {/*          <p>Date:{selectedFile.lastModifiedDate
                     .toLocaleString()}</p> */}
        {/*    </div> */}
        {/* ) : ( */}
        {/*    <p>Select a file to show details</p> */}
        {/* )} */}
        {/*    <FormText color="default"> */}
        {/*    This is some placeholder block-level
               help text for the above input. */}
        {/*    It's a bit lighter and easily wraps
               to a new line. */}
        {/* </FormText> */}
        {/* <FormGroup> */}
        {/*    <Label for="exampleRange">
             Range</Label> */}
        {/*    <Input type="range" name="range"
            id="exampleRange"  width={"10%"}/> */}
        {/* </FormGroup> */}
      </FormGroup>
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
};
PhotoFile.defaultProps = {
  activeTab: '',
  toggleTab: () => {},
};

export default PhotoFile;

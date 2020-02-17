import React from 'react';
import './ValidationInput.css';

const  ValidationInput = (props) => {
  let inputTextLength = '';
  let style;
  //console.log(props.validationInfo);
  if (props.validationInfo <= 5) {    
    inputTextLength = 'Text too short!';
    style = false;
  } else {
    inputTextLength = 'Text long enough!';
    style = true;
  } 

  return (
    <div className={style ? 'ValidationInputGreen' : 'ValidationInputRed'}>
      <label>{ inputTextLength }</label>
    </div>
  );
}

export default ValidationInput;
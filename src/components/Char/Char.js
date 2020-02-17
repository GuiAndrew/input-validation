import React from 'react';
import './Char.css';

const Char = (props) => {
  let isValid;
  if (props.validationInfo <= 5) {
    isValid = null;
  } else {
    isValid = props.clicked;
  }
  return (
    <div className="Char" onClick={ isValid }>
      <p>{ props.character }</p>
    </div>
  );
}

export default Char;
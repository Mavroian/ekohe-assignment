import React from 'react';
import './button.styles.css'

const Button = ({ showMyworld, handleClick }) => {

  return (
    <button className="homeworld_button"
      onClick={handleClick}
    >Show My World</button>
  );

};

export default Button

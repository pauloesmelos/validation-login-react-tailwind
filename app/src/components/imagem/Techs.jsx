import React from 'react';
import img from '../../assets/techs.png';

const Techs = ({ alt, title }) => {
  return (
    <>
        <img className="w-52" src={img} alt={alt} title={title} />
    </>
  )
}

export default Techs;
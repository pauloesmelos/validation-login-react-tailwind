import React from 'react';
import img from '../../assets/user.png';

const User = ({ alt, title }) => {
  return (
    <>
        <img className="w-48" src={img} alt={alt} title={title} />
    </>
  )
}

export default User;
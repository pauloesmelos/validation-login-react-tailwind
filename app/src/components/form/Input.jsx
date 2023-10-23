import React from 'react';

const Input = ({ label, id, name, type, value, setValue, ...props }) => {
  return (
    <div className="w-full max-w-sm p-4">
        <label className="block"  htmlFor={id}>
            {label}
        </label>
        <input 
            className="p-2 outline-none text-neutral-400 bg-gray-100 outline focus:outline-sky-500 outline-2 rounded-sm w-full"
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={setValue}
            {...props}
        />
    </div>
  )
}

export default Input;
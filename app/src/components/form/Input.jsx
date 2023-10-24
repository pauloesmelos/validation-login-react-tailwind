import React from 'react';

const Input = ({ label, id, name, type, value, erro, onChange, onBlur, ...props }) => {
  return (
    <div className="w-full max-w-sm p-4">
        <label className="block"  htmlFor={id}>
            {label}
        </label>
        <input 
            className=
            {`p-2 outline-none text-neutral-600 bg-gray-100 rounded-sm w-full ${erro ? "border border-red-500 focus:outline-none" : "border-0 outline outline-2 focus:outline-sky-500"}`}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
        />
        <p className="text-red-400 mt-2">{erro}</p>
    </div>
  )
}

export default Input;
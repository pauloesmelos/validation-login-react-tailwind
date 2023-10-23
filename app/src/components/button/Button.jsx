import React from 'react';

const Button = ({ text }) => {
  return (
    <div className="mt-3 w-full max-w-sm p-4">
        <button 
            className="p-2 w-full max-w-sm bg-green-500 text-white rounded-sm md:hover:scale-110  hover:bg-green-400 duration-300" 
            type="submit"
        >
            {text}
        </button>
    </div>
  )
}

export default Button;
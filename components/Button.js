import React from 'react';

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            width: 100%;
            min-width: 100%;
            
            height: 35px;
            border: none;
            border-radius: 7px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            background: #64D7EB;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default Button;

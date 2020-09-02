import React from 'react';

const Form = ({
  title, action, onSubmit, error, children,
}) => {
  return (
    <>
      <form action={action} onSubmit={onSubmit}>
        <h2>{title}</h2>
        { error ? <div className="Error"><span>{error}</span></div> : '' }
        {children}
      </form>
      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            width: 264px;
          }
          h2 {
            margin-bottom: 5px;
            color: #64D7EB;
            font-size: 28px;
          }
          .Error {
            min-width: 100%;
            max-width: 100%;
            min-height: 30px;
            background: #ff0000;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            color: white;
            border-radius: 7px;
          }
          .Error span {
            margin: 7px;
          }
          @media screen and (max-width: 320px) {
            form {
              width: 200px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Form;

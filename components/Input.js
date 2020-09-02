const Input = ({
  type = 'text', name, placeholder, value, onChange, error,
}) => {
  return (
    <>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span>{error}</span>
      </div>
      <style jsx>
        {`
          div {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 5px;
          }
          input {
            border: 2px solid #64D7EB;
            max-width: 100%;
            height: 35px;
            padding: 0 5px;
            border-radius: 7px;
            font-size: 16px;
            outline: none;
          }
          span {
            color: red;
            font-size: 14px;
            padding: 2px 5px 0 5px;

          }
        `}
      </style>
    </>
  );
};

export default Input;

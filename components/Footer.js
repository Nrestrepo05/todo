const Footer = () => {
  return (
    <>
      <footer>
        <p>
          made with ❤ by
          <a href="https://nrestrepo05.com"> nrestrepo05</a>
        </p>
      </footer>
      <style jsx>
        {`
          footer {
            height: 30px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            font-size: 16px;
            background: #64D7EB;
            position: absolute;
            bottom: 0;
            font-weight: 500;
          }
          footer a {
            text-decoration: none;
            color: black;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
};

export default Footer;

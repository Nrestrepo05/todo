import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isActive, setIsAtive] = useState(false);

  const handleMenuClick = () => {
    if (isActive) return setIsAtive(false);
    return setIsAtive(true);
  };

  return (
    <>
      <header>
        <div className="title-icon">
          <h1>
            <Link href="/">
              <a>ToDo App</a>
            </Link>
          </h1>
          <span onClick={handleMenuClick} role="button" tabIndex={0}>
            <img src="/images/menu-icon.svg" alt="menu-icon" />
          </span>
        </div>
        <nav className="menu">
          <ul className={isActive ? 'is-active' : ''}>
            <>
              <li className="to-do" key="to-do">
                <Link href="/?done=false">
                  <a onClick={() => setIsAtive(false)}>To Do</a>
                </Link>
              </li>
              <li className="done" key="done">
                <Link href="/?done=true">
                  <a onClick={() => setIsAtive(false)}>Done</a>
                </Link>
              </li>
            </>
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
        header {
          max-width: 100%;
          background: #64D7EB;
          color: white;
          display: flex;
          box-shadow: 7px 0px 10px rgba(0, 0, 0, 0.1);
          flex-direction: column;
          padding: 0 50px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
        }
        .title-icon {
          align-items: center;
          height: 60px;
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        span:focus {
          outline: none;
        }
        
        h1 {
          font-size: 30px;
        }
        h1 a {
          text-decoration: none;
          color: white;
        }
        ul {
          display: none;
        }
        ul.is-active {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 60px);
          justify-content: center;
          align-items: center;
          position: fixed;
          background: #64D7EB;
          top: 60px;
          left: 0;
          right: 0;
        }
        li {
          margin: 10px 0;
          list-style: none;
        }
        li a {
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 20px;
        }
        .to-do a {
          border: 2px solid white;
          border-radius: 7px;
          padding: 5px;
        }
        .to-do a:hover {
          background: white;
          color: #64D7EB;
        }
        .done a {
          border: 2px solid white;
          border-radius: 7px;
          padding: 5px;
          background: white;
          color: #64D7EB;
        }
        .done a:hover {
          background: transparent;
          color: white;
        }
        @media screen and (min-width: 280px) {
          h1 {
            font-size: 32px;
          }
        }
        @media screen and (min-width: 460px){
          header {
            flex-direction: initial;
            align-items: center;
          }
          img {
            display: none
          }
          ul {
            display: flex;
            flex-direction: initial;
          }
          li {
            margin-right: 15px;
            white-space:nowrap;
          }
          li a {
            font-size: 16px;
          }
        } 
        @media screen and (min-width: 560px){
          h1 {
            font-size: 36px;
          }
          li a {
            font-size: 20px;
          }
        }
      `}
      </style>
    </>
  );
};

export default Header;

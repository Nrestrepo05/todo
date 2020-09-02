import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/ico"
          href="/images/heart.ico"
        />
        <title>{title} | ToDo</title>
      </Head>
      <div className="page_container">
        <Header />
        {children}
        <Footer />
      </div>
      <style jsx>
        {`
          .page_container {
            position: relative;
            min-height: calc(100vh - 100px);
            padding-top: 60px;
            padding-bottom: 40px;
          }
        `}
      </style>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            font-family: 'Roboto Condensed', system-ui;
          }

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #fff;

            position: fixed;
            z-index: 26262626262626;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #29d, 0 0 5px #29d;
            opacity: 1.0;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }

          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 26262626262626;
            top: 15px;
            right: 15px;
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border: solid 2px transparent;
            border-top-color: #fff;
            border-left-color: #fff;
            border-radius: 50%;

            -webkit-animation: nprogress-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }

          @-webkit-keyframes nprogress-spinner {
            0%   { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
          @keyframes nprogress-spinner {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

        `}
      </style>
    </>
  );
};

export default Layout;

import userContext from '../userContext';

function MyApp({ Component, pageProps }) {
  return (
    <userContext.Provider>
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;

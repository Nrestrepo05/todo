import { createContext, useState } from 'react';
import cookie from 'js-cookie';

export const userContext = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (cookie.get('token')) return true;
    return false;
  });
  const [userToken, setUserToken] = useState(() => {
    const token = cookie.get('token');
    if (token) return token;
    return '';
  });

  const value = {
    isAuth,
    userToken,
    activateAuth: (token) => {
      setIsAuth(true);
      setUserToken(token);
      cookie.set('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      setUserToken('');
      cookie.remove('token');
    },
  };

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export default {
  Provider,
  Consumer: userContext.Consumer,
};

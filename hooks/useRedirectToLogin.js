import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userContext } from '../userContext';

const useRedirectToLogin = () => {
  const { isAuth } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth]);
};

export default useRedirectToLogin;

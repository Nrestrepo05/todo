import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { userContext } from '../userContext';
import Layout from '../components/Layout';
import useInputValue from '../hooks/useInputValue';
import Input from '../components/Input';
import Form from '../components/Form';
import Button from '../components/Button';

const login = () => {
  const [loginError, setLoginError] = useState('');
  const { activateAuth } = useContext(userContext);
  const username = useInputValue('');
  const password = useInputValue('');
  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    setLoginError('');
    e.preventDefault();
    try {
      const request = await fetch('https://todo-nrestrepo05-api.herokuapp.com/api-token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value.trim(),
        }),
      });
      const data = await request.json();
      if (request.status === 400) {
        setLoginError('The username or passsword are wrong!');
      }
      if (data && data.token) {
        activateAuth(data.token);
        router.push('/');
      }
    } catch (error) {
      setLoginError('login error');
    }
  };

  return (
    <>
      <Layout title="log in">
        <div>
          <Form title="Log In!" error={loginError} onSubmit={handleLoginSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="username"
              {...username}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              {...password}
            />
            <Button type="submit">
              Log In!
            </Button>
            <span>Don&apos;t you have an account yet?&nbsp;
              <Link href="/signup">
                <a>Sign up here!</a>
              </Link>
            </span>
          </Form>
        </div>
      </Layout>
      <style jsx global>
        {`
          .page_container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default login;

import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useInputValue from '../hooks/useInputValue';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { userContext } from '../userContext';

const signup = () => {
  const { activateAuth } = useContext(userContext);
  const [signUpError, setSignUpError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const username = useInputValue('');
  const password = useInputValue('');
  const passwordConfirmation = useInputValue('');
  const router = useRouter();

  const validatePasswordConfirmation = () => {
    if (password.value === passwordConfirmation.value) {
      return password.value.trim();
    }
    setPasswordConfirmationError('Password confirmation must be equal to password');
    throw new Error('Form Error');
  };

  const handleSignUpSubmit = async (e) => {
    setSignUpError('');
    e.preventDefault();
    try {
      const request = await fetch('https://todo-nrestrepo05-api.herokuapp.com/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: validatePasswordConfirmation(),
        }),
      });
      const data = await request.json();
      if (request.status === 400 && data.username) {
        setUsernameError(data.username[0]);
        setSignUpError('Something went wrong! Please check all the fields');
      }
      if (request.status === 201) {
        activateAuth(data.auth_token);
        router.push('/');
      }
    } catch (error) {
      setSignUpError('Something went wrong! Please check all the fields');
    }
  };

  return (
    <>
      <Layout title="Sign Up">
        <div>
          <Form title="Log In!" error={signUpError} errorMessage="The password and the password confirmation must be equals">
            <Input
              type="text"
              name="username"
              placeholder="username"
              {...username}
              error={usernameError}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              {...password}
            />
            <Input
              type="password"
              name="password_confirmation"
              placeholder="password confirmation"
              {...passwordConfirmation}
              error={passwordConfirmationError}
            />
            <Button type="submit" onClick={handleSignUpSubmit}>
              Log In!
            </Button>
            <span>Do you have an account yet?&nbsp;
              <Link href="/signup">
                <a>Log in here!</a>
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

export default signup;

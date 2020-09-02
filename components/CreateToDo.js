import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { userContext } from '../userContext';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import useInputValue from '../hooks/useInputValue';
import TextArea from './TextArea';

const CreateToDo = ({ buttonOnClick }) => {
  const { userToken } = useContext(userContext);
  const title = useInputValue('');
  const description = useInputValue('');
  const router = useRouter();
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleCreateToDoSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch('https://todo-nrestrepo05-api.herokuapp.com/api/v1/todo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({
          title: title.value.trim(),
          description: description.value.trim(),
        }),
      });
      const data = await request.json();
      if (request.status === 400) {
        if (data.title && data.description) {
          setTitleError(data.title);
          setDescriptionError(data.description);
        }
        if (data.title) setTitleError(data.title);
        if (data.description) setDescriptionError(data.description);
      }
      if (request.status === 201) {
        return router.reload();
      }
      return '';
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div className="container">
        <button type="button" onClick={buttonOnClick}>
          x
        </button>
        <Form title="New To Do!">
          <Input placeholder="title" name="title" {...title} error={titleError} />
          <TextArea placeholder="description" name="description" {...description} error={descriptionError} />
          <Button onClick={handleCreateToDoSubmit}>
            Create!
          </Button>
        </Form>
      </div>
      <style jsx>
        {`
          .container {
            background: rgba(0, 0, 0, .75);
            height: 100vh;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          button {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 15px;
            right: 15px;
            outline: none;
            background: white;
            border: 2px solid white;
            border-radius: 50%;
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
};

export default CreateToDo;

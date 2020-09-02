import 'isomorphic-fetch';
import { useState } from 'react';
import useRedirectToLogin from '../hooks/useRedirectToLogin';
import Layout from '../components/Layout';
import Button from '../components/Button';
import CardsContainer from '../components/CardsContainer';
import CreateToDo from '../components/CreateToDo';
import Error from './_error';

const index = ({
  allToDoList, toDoListWithQuery, done, statusCode,
}) => {
  useRedirectToLogin();
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }


  const [createToDoIsActive, setCreateToDoIsActive] = useState(false);

  const handleModalClick = () => {
    if (createToDoIsActive) return setCreateToDoIsActive(false);
    return setCreateToDoIsActive(true);
  };

  return (
    <>
      <Layout title="To Do Page">
        <div className="button-container">
          <Button onClick={handleModalClick}>
            New To Do!
          </Button>
          {
            createToDoIsActive
              ? <CreateToDo buttonOnClick={handleModalClick} />
              : ''
          }
        </div>
        {allToDoList
          ? (
            <>
              <CardsContainer
                title="To Do"
                toDoList={allToDoList.filter((toDo) => toDo.done === false)}
              />
              <CardsContainer
                title="Done"
                toDoList={allToDoList.filter((toDo) => toDo.done === true)}
              />
            </>
          )
          : toDoListWithQuery && !!done
            ? <CardsContainer title="Done" toDoList={toDoListWithQuery} />
            : <CardsContainer title="To Do" toDoList={toDoListWithQuery} />}
      </Layout>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          .button-container {
            margin: 10px 50px 0 50px;
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps({ req, query, res }) {
  try {
    if (req.headers.cookie) {
      const token = req.headers.cookie.split('=')[1];
      const authorization = `Token ${token}`;
      let url = 'https://todo-nrestrepo05-api.herokuapp.com/api/v1/todo/';

      if (query.done) {
        url = `${url}?done=${query.done}`;
        const response = await fetch(url, {
          headers: {
            Authorization: authorization,
          },
        });
        const toDoResponse = await response.json();
        const toDoListWithQuery = toDoResponse;
        return { props: { toDoListWithQuery, done: query.done, statusCode: 200 } };
      }

      const response = await fetch(url, {
        headers: {
          Authorization: authorization,
        },
      });
      const toDoResponse = await response.json();
      const allToDoList = toDoResponse;

      if (req.status >= 400) {
        req.statusCode = res.status;
        return {
          props: {
            allToDoList: null, statusCode: req.status,
          },
        };
      }

      return {
        props: { allToDoList, statusCode: 200 },
      };
    }
    return { props: { } };
  } catch (error) {
    res.statusCode = 503;
    return { error, props: { allToDoList: null, statusCode: 503 } };
  }
}

export default index;

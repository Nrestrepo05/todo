import { useRouter } from 'next/router';
import { useContext } from 'react';
import ToDoCard from './ToDoCard';
import { userContext } from '../userContext';

const CardsContainer = ({ title, toDoList = [] }) => {
  const router = useRouter();
  const { userToken } = useContext(userContext);
  const Authorization = `Token ${userToken}`;

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await fetch(`https://todo-nrestrepo05-api.herokuapp.com/api/v1/todo/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      });

      return router.reload();
    } catch (error) {
      return error;
    }
  };

  const handleCheck = async (e, id, done) => {
    e.preventDefault();
    try {
      await fetch(`https://todo-nrestrepo05-api.herokuapp.com/api/v1/todo/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
        body: JSON.stringify({
          done,
        }),
      });
      return router.reload();
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div className="container">
        <h2>
          {title}
        </h2>
        <div className="grid-container">
          {toDoList.map((toDo) => (
            <ToDoCard
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              description={toDo.description}
              done={toDo.done}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: 10px 50px 0 50px;
          }
          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
          }
          h2 {
            color: #64D7EB;
            margin-bottom: 10px;
          }

          @media screen and (min-width: 563px) {
            .grid-container {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media screen and (min-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media screen and (min-width: 1024px) {
            .grid-container {
              grid-template-columns: 1fr 1fr 1fr 1fr; 
            }
          }
        `}
      </style>
    </>
  );
};

export default CardsContainer;

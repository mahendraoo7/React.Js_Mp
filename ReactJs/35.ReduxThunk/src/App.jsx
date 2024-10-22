import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Reducer/action';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Data Fetching with Redux Thunk</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {data.map((item) => (
          <>
           <li key={item.id}> Id :{item.id}</li>
           <li key={item.stock}> Title : {item.title}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;

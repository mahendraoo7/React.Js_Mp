import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './Reducer/Action';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  console.log(data);
  

  // Dispatch the action to fetch data when the component mounts
  useEffect(() => {
    dispatch(fetchDataRequest()); 
  }, [dispatch]);

  return (
    
    <div>
      <h1>Simple Redux-Saga Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

Automated commit on 2024-12-03T12:53:56.588Z
Automated commit on 2024-12-03T12:55:00.288Z
Automated commit on 2024-12-03T12:56:28.352Z
Automated commit on 2024-12-03T12:57:40.337Z
Automated commit on 2024-12-03T12:58:32.693Z
Automated commit on 2024-12-03T12:59:20.428Z
Automated commit on 2024-12-03T13:01:29.933Z
Automated commit on 2024-12-03T13:02:52.433Z

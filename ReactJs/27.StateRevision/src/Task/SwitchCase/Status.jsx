import React from 'react';

const Status = ({ status }) => {
    
  let message;

  switch (status) {

    case 'loading':
      message = <p>Loading...</p>;
      break;
    case 'success':
      message = <p>Data loaded successfully!</p>;
      break;
    case 'error':
      message = <p>There was an error loading the data.</p>;
      break;
    default:
      message = <p>Unknown status.</p>;
  }

  return <div>{message}</div>;
};

export default Status
// App.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <h1>Auth0 Authentication</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          <h2>Welcome, {user.name}</h2>
        </>
      )}
    </div>
  );
};

export default App;

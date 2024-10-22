export const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
  });
  
  export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  });
  
  export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest());
  
      fetch('http://localhost:3000/products') // Example API
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchDataFailure(error.message));
        });
    };
  };
  
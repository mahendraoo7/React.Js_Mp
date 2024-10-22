const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { loading: false, data: action.payload, error: null };
      case 'FETCH_DATA_FAILURE':
        return { loading: false, data: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  
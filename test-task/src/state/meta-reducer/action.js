import axios from 'axios';

export const responseFromServerSuccess = (response) => {
    return {
      type: 'RESPONSE_FROM_THE_SERVER',
      response,
    };
  }

export const getMetaDataRequest = () => ({
    type: 'GET_META_REQUEST',
})

export const getMetaDataSuccess = (data) => ({
    type: 'GET_META_SUCCESS',
    data,
})

export const setFromServerRequest = () => {
  return {
    type: 'SET_FROM_THE_SERVER_REQUEST'
  };
}

export const getMetaData = () => {
    return (dispatch) => {
        dispatch(getMetaDataRequest());
        axios.get('/meta')
            .then(response => dispatch(getMetaDataSuccess(response.data)))
      };
}

export const sendFetchData = (data) => {
  return (dispatch) => {
    dispatch(setFromServerRequest());
    axios.post('/data', {form : data})
      .then(response => response.data)
      .then(formValue => dispatch(responseFromServerSuccess(formValue)));
  };
}
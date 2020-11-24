import axios from 'axios';

export function responseFromServerSuccess(response) {
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

export const getMetaData = () => {
    return (dispatch) => {
        dispatch(getMetaDataRequest());
        axios.get('/meta')
            .then(response => dispatch(getMetaDataSuccess(response.data)))
      };
}


import axios from 'axios';
const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR";

export const simpleAction = () => (dispatch,getState) => {
    axios.get(url)
    .then(function (response) {
      console.log(response);
      dispatch({
        type: 'SIMPLE_ACTION',
        payload: response.data
       })
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

   export const resetAction = () => (dispatch,getState) => {
    dispatch({
     type: 'RESET_ACTION',
     payload: 'reset_of_action'
    })
   }
import axios from 'axios';
const url = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3&e=CCCAGG";

export const simpleAction = () => (dispatch,getState) => {
    axios.get(url)
    .then(function (response) {
      console.log(response);
      dispatch({
        type: 'SIMPLE_ACTION',
        payload: response.data.Data
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
export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   }

   export const resetAction = () => dispatch => {
    dispatch({
     type: 'RESET_ACTION',
     payload: 'reset_of_action'
    })
   }
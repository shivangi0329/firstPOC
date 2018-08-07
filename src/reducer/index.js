import { combineReducers } from 'redux';
import simpleReducer from './reducer.js';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
 simpleReducer
});

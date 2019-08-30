/**
 * Este sirve para unir todos los reducers que cree
 */
import { combineReducers } from 'redux';
import citasReducers from './citasReducers';
import errorReducer from './errorReducer';

export default combineReducers({
    cita: citasReducers,
    error: errorReducer
});

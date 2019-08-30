import { VALIDAR_FORMULARIO } from '../actions/types';

/** Cada reducer tiene su propio state */
const initialState = {
    error: false
};

export default function(state = initialState, action){
    switch(action.type ) {
        case VALIDAR_FORMULARIO:
            return {
                error: action.payload
            }
        default:
            return state
    }
}
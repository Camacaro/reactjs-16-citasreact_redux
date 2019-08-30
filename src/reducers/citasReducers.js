import {MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA}  from '../actions/types';

/**
 * State inicial, cada reducer debe tener su propio state
 */

const initialState = {
    citas: []
};

export default function(state = initialState, action){

    switch( action.type ) {
        case MOSTRAR_CITAS:
            return {
                ...state
            }
        /**
         * AGREGAR_CITA
         * retorno el state con el spread operator, 
         * acceso a la propiedad de citas del state y le asigno las citas actuales incorporando la nueva
         */
        case AGREGAR_CITA:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
        /**
         * retorna al state todos execto el id que coincida
         */
        case BORRAR_CITA:
            return {
                ...state,
                citas: state.citas.filter( cita => cita.id !== action.payload )
            }
        default:
            return state;
    }
}
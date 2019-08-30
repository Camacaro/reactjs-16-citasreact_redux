import { VALIDAR_FORMULARIO } from './types';

export const validarFormulario = (estado) => {
    return {
        type: VALIDAR_FORMULARIO,
        payload: estado
    }
}
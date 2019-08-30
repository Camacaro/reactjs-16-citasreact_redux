import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';
/** Funcion a utilizar */
import { obtenerCitas  } from '../actions/citasActions';
/** Almacenar en el localstorage */
import store from '../store';

store.subscribe( () => {
    localStorage.setItem('citas', JSON.stringify( store.getState() ) );
} );

class ListaCitas extends Component {
    
    /*componentDidMount() {
        this.props.obtenerCitas();
    }*/
    
    render() {
        const citas = this.props.citas; 
        /**
         * Tamaño de un json
        */
       const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí';

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>

                    <div className="lista-citas">
                        
                        {Object.keys(this.props.citas).map(cita => (

                            <Cita
                                key={cita}
                                info={this.props.citas[cita]}
                            />

                        ) )}

                        
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired
}

/**
 * 
 * con la funcion connect haga qeu se comunique el redux con mi componente,
 * el 2do parametro es la funcion(ACTION) que estoy llamando, esta funcion retorna un type que va a
 * interpretar el reducer y hara la operacion correspondiente retornando el state final que se lo pasara a
 * la funcion mapStateToProps donde :
 * state es la variable que almacenara la informacion que regreso el reducer
 * state.cita es el indice o nombre que se le puso en el combineReducers para identificar cual es el reducer a ejecutarse
 * state.cita.citas es indice o nombre que retorna en si el reduce
 * 
 * citas: state.cita.citas
 * La key citas, es la variable que recibira el componente como props, this.props.citas
 * ejemplo variable: state.cita.citas -> this.props.variable
 */

const mapStateToProps = state => ({
    citas: state.cita.citas
});

export default connect(mapStateToProps, obtenerCitas)(ListaCitas)
// export default ListaCitas;
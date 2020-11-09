import React, {useState} from 'react'
import Error from './Error';


const Formulario = ({pokemonBuscado}) => {

    const[busqueda, guardarBusqueda] = useState('')
    const[error, guardarError] = useState(false);

    const buscarPokemon = e => {
        e.preventDefault();
        
        //se valida si esta vacio
        if(busqueda.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        pokemonBuscado(busqueda);
    }

    return ( 
        <form
            onSubmit={buscarPokemon}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca tu pokemon favorito"
                        onChange={e => guardarBusqueda(e.target.value.toLowerCase())}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        placeholder="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="no ingresaste datos para realizar la busqueda"/> : null }
        </form>
     );
}
 
export default Formulario;
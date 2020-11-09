import React, {useState, useEffect,Fragment} from 'react';
import Formulario from './Components/Formulario';
import Pokemon from './Components/Pokemon';
import Header from './Components/Header';

function App() {

  //state  principal
  const [busquedapokemon, pokemonBuscado] = useState('')
  const [pokemoncito, guardarPokemon] = useState ([]);

  //usando useEffect para la consulta en la api
  useEffect(()=>{
    const ConsultarApi = async () => {
      if(busquedapokemon === '') return;

      const url = `https://pokeapi.co/api/v2/pokemon/${busquedapokemon}`
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado)
      guardarPokemon(resultado)
    }

    ConsultarApi();
  },[busquedapokemon])
  return (
    <Fragment>
      <Header/>
      <div className="container mt-4"> 
          <div className="jumbotron">
            <Formulario
              pokemonBuscado={pokemonBuscado}
            />
          </div>
          
          <div className="row justify-content-center">
            <Pokemon
              pokemoncito={pokemoncito}
            />
          </div>
      </div>
    </Fragment>
  );
}

export default App;

import React from 'react'

const Pokemon = ({pokemoncito}) => {
    if(pokemoncito.length === 0) return null; 
    return ( 
        <div className="col-12 p-5 row jumbotron text-center">
            <div className="col-md-4">
                <img className="img-fluid pokemon text-center" src={pokemoncito.sprites.front_default} alt=""/>
            </div>
            <div className="col-md-8">
            <p className="pokenombre">Nombre Pokemon: {pokemoncito.name}</p>
            <p className="pokealtura">Altura Pokemon: {pokemoncito.height} pies</p>
            <p className="pokepeso">Peso Pokemon: {pokemoncito.weight} LB</p>
            <p className="pokehabilidades">Habilidad Principal: {pokemoncito.abilities[0].ability.name}</p>
            <p className="pokehabilidades">Habilidad Secundaria: {pokemoncito.abilities[1].ability.name}</p>
            <p className="pokemovimientos">Mejor Movimiento: {pokemoncito.moves[0].move.name}</p>    
            </div>
        </div>
     );
}
 
export default Pokemon;
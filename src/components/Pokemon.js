import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const[pokemon, setPokemon] = useState([]);

    const fetchPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then (response => {setPokemon(response.data.results)});
    }
    return(
        <div>
            <button onClick= {fetchPokemon}>Fetch Pokemon</button>
            {pokemon.map((pokemon, i) =>{
                return (<div key = {i}> {pokemon.name}</div>)
            })}
        </div>
    )
}
export default Pokemon;
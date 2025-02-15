"use client";
import { Pokemon } from "@/lib/interface";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonDetails from "./PokemonDetails";

export default function Pokedex({ pokemonList }: { pokemonList: Pokemon[] }) {
  const [currentPokemon, setCurrentPokemon] = useState(pokemonList[0]);
  
  return (
    <>
      <div className="max-h-screen overflow-y-auto border-2">
        {pokemonList.map((pokemon: Pokemon) => (
          <div key={pokemon.pokedex_id} onMouseEnter={() => setCurrentPokemon(pokemon)}>
            <PokemonCard pokemon={pokemon} />
            <hr />
          </div>
        ))}
      </div>
      <div className="col-span-2">
        <h1>Details</h1>
        <PokemonDetails pokemon={currentPokemon} />
      </div>
    </>
  );
}

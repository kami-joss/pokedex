"use client";
import { PokemonContext, usePokemons } from "@/lib/providers/PokemonsProviders";
import Link from "next/link";
import PokemonMiniCard from "../components/Pokemon/PokemonMiniCard";

export default function PokemonsPage() {
  const { pokemonsList } = usePokemons() as PokemonContext;

  return (
    <div className="xl:hidden block flex-grow overflow-auto p-2 w">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {pokemonsList.map((pokemon) => (
          <Link
            key={pokemon.pokedex_id}
            href={`/pokemons/${pokemon.pokedex_id}`}
            className="bloc"
          >
            <PokemonMiniCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";
import { Pokemon } from "@/lib/interface";
import { PokemonContext, usePokemons } from "@/lib/providers/PokemonsProviders";
import pokemonFilters from "@/lib/utils/pokemonFilters";
import Link from "next/link";
import RightIcon from "@/app/components/UI/Icons/RightIcon";
import PokemonMiniCard from "@/app/components/Pokemon/PokemonMiniCard";

export default function EvolutionsList({ pokemon }: { pokemon: Pokemon }) {
  const { pokemonsList } = usePokemons() as PokemonContext;

  const pokemonExist = (pokedexId: number) => {
    return !!pokemonFilters.getPokemonById(pokedexId, pokemonsList);
  };

  return (
    <div className="flex items-center gap-4">
      {pokemon.evolution?.pre?.map((evolution) =>
        pokemonExist(evolution.pokedex_id) ? (
          <div key={evolution.pokedex_id} className="flex items-center gap-4">
            <Link href={`/pokemons/${evolution.pokedex_id}`}>
              <PokemonMiniCard
                key={evolution.pokedex_id}
                pokemon={pokemonFilters.getPokemonById(
                  evolution.pokedex_id,
                  pokemonsList
                )}
              />
            </Link>
            <RightIcon />
          </div>
        ) : null
      )}
      <PokemonMiniCard pokemon={pokemon} />
      {pokemon.evolution?.next?.map((evolution) =>
        pokemonExist(evolution.pokedex_id) ? (
          <div key={evolution.pokedex_id} className="flex items-center gap-4">
            <RightIcon />
            <Link href={`/pokemons/${evolution.pokedex_id}`}>
              <PokemonMiniCard
                key={evolution.pokedex_id}
                pokemon={pokemonFilters.getPokemonById(
                  evolution.pokedex_id,
                  pokemonsList
                )}
              />
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
}

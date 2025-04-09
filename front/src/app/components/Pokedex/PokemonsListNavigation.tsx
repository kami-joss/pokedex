"use client";
import { Pokemon } from "@/lib/interface";
import { useParams, useRouter } from "next/navigation";
import PokemonsList from "@/app/components/Pokedex/PokemonsList";

export default function PokemonsListNavigation({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  const router = useRouter();
  const params = useParams();

  const { pokedex_id } = params;

  const currentPokemon = pokemonList.find(
    (pokemon: Pokemon) => pokemon.pokedex_id.toString() === pokedex_id
  );

  return (
    <PokemonsList
      currentPokemon={currentPokemon}
      pokemonsList={pokemonList}
      onClick={(pokemon: Pokemon) =>
        router.push(`/pokemons/${pokemon.pokedex_id}`)
      }
    />
  );
}

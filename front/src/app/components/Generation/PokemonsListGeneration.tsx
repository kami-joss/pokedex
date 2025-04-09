"use client";
import useQueryParams from "@/lib/hooks/useQueryParams";
import { Pokemon } from "@/lib/interface";
import { useRouter, useSearchParams } from "next/navigation";
import PokemonsList from "@/app/components/Pokedex/PokemonsList";
import { Suspense } from "react";

export default function PokemonsListGeneration({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createUrl } = useQueryParams();

  const pokedexId = searchParams.get("pokedex_id") || "";

  const currentPokemon =
    pokemonList.find(
      (pokemon: Pokemon) => pokemon.pokedex_id.toString() === pokedexId
    ) || pokemonList[0];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonsList
        currentPokemon={currentPokemon}
        pokemonsList={pokemonList}
        onClick={(pokemon: Pokemon) =>
          router.push(
            createUrl({
              pokedex_id: pokemon.pokedex_id.toString(),
            })
          )
        }
      />
    </Suspense>
  );
}

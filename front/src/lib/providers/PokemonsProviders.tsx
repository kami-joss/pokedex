"use client";
import { createContext, Suspense, useCallback, useContext } from "react";
import { Pokemon } from "../interface";

type Props = {
  data: Pokemon[];
  children: React.ReactNode;
};

export interface PokemonContext {
  pokemonsList: Pokemon[];
  getPokemonById: (id: number, scope?: Pokemon[]) => Pokemon | undefined;
  getPokemonByName: (name: string, scope?: Pokemon[]) => Pokemon | undefined;
  searchPokemonByName: (name: string, scope?: Pokemon[]) => Pokemon[];
}

const PokemonsContext = createContext({});
export const usePokemons = () => useContext(PokemonsContext);

export default function PokemonsProvider({ data, children }: Props) {
  const getPokemonById = useCallback(
    (id: number, scope: Pokemon[] = data): Pokemon | undefined => {
      return scope.find((pokemon) => pokemon.pokedex_id === id);
    },
    [data]
  );

  const getPokemonByName = useCallback(
    (name: string, scope: Pokemon[] = data): Pokemon | undefined => {
      const search = name.toLocaleLowerCase();
      return scope.find(
        (pokemon) =>
          pokemon.name.fr.toLocaleLowerCase() === search ||
          pokemon.name.en.toLocaleLowerCase() === search ||
          pokemon.name.jp.toLocaleLowerCase() === search
      );
    },
    [data]
  );

  const searchPokemonByName = useCallback(
    (name: string, scope: Pokemon[] = data): Pokemon[] => {
      const search = name.toLocaleLowerCase();
      return scope.filter(
        (pokemon) =>
          pokemon.name.fr.toLocaleLowerCase().includes(search) ||
          pokemon.name.en.toLocaleLowerCase().includes(search) ||
          pokemon.name.jp.toLocaleLowerCase().includes(search)
      );
    },
    [data]
  );

  return (
    <PokemonsContext.Provider
      value={{
        pokemonsList: data,
        getPokemonById,
        getPokemonByName,
        searchPokemonByName,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </PokemonsContext.Provider>
  );
}

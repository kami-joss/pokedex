import { Pokemon } from "@/lib/interface";

const pokemonFilters = {
  getPokemonById: (id: number, scope: Pokemon[]): Pokemon | undefined => {
    return scope.find((pokemon) => pokemon.pokedex_id === id);
  },
  getPokemonByName: (name: string, scope: Pokemon[]): Pokemon | undefined => {
    const search = name.toLocaleLowerCase();
    return scope.find(
      (pokemon) =>
        pokemon.name.fr.toLocaleLowerCase() === search ||
        pokemon.name.en.toLocaleLowerCase() === search ||
        pokemon.name.jp.toLocaleLowerCase() === search
    );
  },
  searchPokemonByName: (name: string, scope: Pokemon[]): Pokemon[] => {
    const search = name.toLocaleLowerCase();
    return scope.filter(
      (pokemon) =>
        pokemon.name.fr.toLocaleLowerCase().includes(search) ||
        pokemon.name.en.toLocaleLowerCase().includes(search) ||
        pokemon.name.jp.toLocaleLowerCase().includes(search)
    );
  },
};

export default pokemonFilters;

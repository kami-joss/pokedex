"use client";
import { Pokemon } from "@/lib/interface";
import {
  PokemonsListContextInterface,
  usePokemonsList,
} from "@/lib/providers/PokemonstListProvider";
import debounce from "@/lib/utils/debounce";
import pokemonFilters from "@/lib/utils/pokemonFilters";
import { useEffect, useState } from "react";
import PokemonMiniCard from "@/app/components/Pokemon/PokemonMiniCard";
import SearchPreviewInput from "@/app/components/UI/Inputs/SearchPreviewInput";
import PokemonsListButtons from "@/app/components/Pokedex/PokemonsListButtons";

export default function PokemonsList({
  pokemonsList,
  currentPokemon,
  onClick,
}: {
  pokemonsList: Pokemon[];
  currentPokemon: Pokemon | undefined;
  onClick?: (pokemon: Pokemon) => void;
}) {
  const { isOpen, isOpenFull, setIsOpenFull } =
    usePokemonsList() as PokemonsListContextInterface;

  const [searchPreview, setSearchPreview] = useState<Pokemon[] | undefined>();

  const deboncedSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      const matchs = pokemonFilters
        .searchPokemonByName(e.target.value, pokemonsList)
        .slice(0, 5);
      setSearchPreview(matchs);
    } else {
      setSearchPreview(undefined);
    }
  }, 500);

  const scrollToPokemon = (pokemon: Pokemon) => {
    const list = document.getElementById("pokedex");
    const element = document.getElementById(pokemon.pokedex_id.toString());
    if (element && list) {
      list.scrollTo({
        top: element.offsetTop - 200,
        behavior: "smooth",
      });
    }
  };

  const handleClickPokemon = (pokemon: Pokemon) => {
    scrollToPokemon(pokemon);
    if (onClick) {
      onClick(pokemon);
    }
  };

  const isSelected = (pokedexId: number) => {
    return currentPokemon?.pokedex_id === pokedexId;
  };

  useEffect(() => {
    if (currentPokemon) {
      scrollToPokemon(currentPokemon);
      setIsOpenFull(false);
    }
  }, [currentPokemon]);

  return (
    <div
      className={`${
        isOpenFull ? "w-full bg-background" : isOpen ? "w-96" : "w-14"
      } duration-200 hidden xl:flex flex-col border rounded-r`}
    >
      <div>
        <PokemonsListButtons />
        {isOpen && (
          <div className="flex flex-col relative p-2">
            <SearchPreviewInput
              searchPreview={searchPreview}
              onChange={deboncedSearch}
              placeholder="Rechercher dans la liste"
            />
          </div>
        )}
      </div>
      {(isOpen || isOpenFull) && (
        <div
          className={`overflow-y-auto border-2 grid grid-cols-8 flex-grow gap-1 p-1`}
          id="pokedex"
        >
          {pokemonsList.map((pokemon: Pokemon) => (
            <div
              key={pokemon.pokedex_id}
              className={`${isOpenFull ? "col-span-1" : "col-span-8"} ${
                isSelected(pokemon.pokedex_id) ? "bg-foreground" : ""
              } hover:bg-foreground rounded cursor-pointer`}
            >
              <div
                id={pokemon.pokedex_id.toString()}
                onClick={() => handleClickPokemon(pokemon)}
              >
                <PokemonMiniCard pokemon={pokemon} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

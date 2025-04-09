"use client";

import { GenerationInterface, Pokemon } from "@/lib/interface";
import debounce from "@/lib/utils/debounce";
import pokemonFilters from "@/lib/utils/pokemonFilters";
import Link from "next/link";
import { useState } from "react";
import MenuBurgerIcon from "@/app/components/UI/Icons/MenuBurgerIcon";
import SearchPreviewInput from "@/app/components/UI/Inputs/SearchPreviewInput";
import DrawerNav from "@/app/components/Layout/DrawerNav";

export default function Header({
  pokemons,
  generations,
}: {
  pokemons: Pokemon[];
  generations: GenerationInterface[];
}) {
  const [searchPreview, setSearchPreview] = useState<Pokemon[] | undefined>();

  const deboncedSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      const matchs = pokemonFilters
        .searchPokemonByName(e.target.value, pokemons)
        .slice(0, 5);
      setSearchPreview(matchs);
    } else {
      setSearchPreview(undefined);
    }
  }, 500);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <DrawerNav
        generations={generations}
        drawerIsOpen={drawerIsOpen}
        setDrawerIsOpen={() => setDrawerIsOpen(false)}
      />

      <div className="w-full p-2">
        <div className="flex gap-8 items-center justify-between">
          <h1 className="text-white hidden xl:block">My Pokedex</h1>
          <div className="xl:hidden" onClick={() => setDrawerIsOpen(true)}>
            <MenuBurgerIcon />
          </div>
          <div className="flex flex-col relative w-1/2">
            <SearchPreviewInput
              searchPreview={searchPreview}
              placeholder="Rechercher"
              onChange={deboncedSearch}
            />
          </div>
          <div className="right-0 xl:block hidden">
            <Link href="/comparateur" className="btn btn-white">
              Accéder au comparateur
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

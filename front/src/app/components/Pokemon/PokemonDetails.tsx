"use client";
import ToggleComparatorButton from "@/app/components/Pokedex/ToggleComparatorButton";
import EvolutionsList from "@/app/components/Pokemon/EvolutionsList";
import PokemonInfos from "@/app/components/Pokemon/PokemonInfos";
import PokemonResistancesTable from "@/app/components/Pokemon/PokemonResistancesTable";
import PokemonStats from "@/app/components/Pokemon/PokemonStats";
import PokemonTalents from "@/app/components/Pokemon/PokemonTalents";
import { Pokemon } from "@/lib/interface";
import {
  PokemonsListContextInterface,
  usePokemonsList,
} from "@/lib/providers/PokemonstListProvider";
import PokemonDetailsHead from "./PokemonDetailsHead";

export default function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  const { isOpenFull } = usePokemonsList() as PokemonsListContextInterface;

  return (
    <div
      className={`grid grid-cols-2 gap-6 p-6 overflow-y-auto w-full ${
        isOpenFull && pokemon ? "w-0 hidden" : ""
      }`}
    >
      <section className="flex flex-col items-center col-span-2 lg:col-span-1 gap-2">
        <ToggleComparatorButton pokemon={pokemon} />
        <PokemonDetailsHead pokemon={pokemon} />
      </section>
      <section className="bloc col-span-2 lg:col-span-1">
        <h3>Informations générales</h3>
        <PokemonInfos pokemon={pokemon} />
      </section>
      <div className="col-span-2">
        <hr />
      </div>
      <section className="bloc col-span-2 lg:col-span-1">
        <h3>Statistiques</h3>
        <PokemonStats stats={pokemon.stats} />
      </section>
      <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
        <section className="bloc">
          <h3>Talents</h3>
          <PokemonTalents talents={pokemon.talents} />
        </section>
        <section className="bloc">
          <h3>Ligne evolutive</h3>
          <div className="flex justify-center">
            <EvolutionsList pokemon={pokemon} />
          </div>
        </section>
      </div>
      <section className="bloc col-span-2">
        <h3>Résistances</h3>
        <PokemonResistancesTable resistances={pokemon.resistances} />
      </section>
    </div>
  );
}

"use client";
import { Pokemon } from "@/lib/interface";
import {
  ComparatorContextInterface,
  useComparator,
} from "@/lib/providers/ComparatorProvider";
import { PokemonContext, usePokemons } from "@/lib/providers/PokemonsProviders";
import { useEffect, useState } from "react";
import PokemonDetailsHead from "@/app/components/Pokemon/PokemonDetailsHead";
import PokemonResistancesTable from "@/app/components/Pokemon/PokemonResistancesTable";
import PokemonStats from "@/app/components/Pokemon/PokemonStats";
import PokemonTalents from "@/app/components/Pokemon/PokemonTalents";
import ToggleComparatorButton from "@/app/components/Pokedex/ToggleComparatorButton";

export default function Comparateur() {
  const [comparator, setComparator] = useState<Pokemon[]>([]);
  const { pokemonsList } = usePokemons() as PokemonContext;
  const { comparator: comparatorIds } =
    useComparator() as ComparatorContextInterface;

  useEffect(() => {
    const pokemons = pokemonsList.filter((p) =>
      comparatorIds?.includes(p.pokedex_id)
    );
    setComparator(pokemons);
  }, [pokemonsList, comparatorIds]);

  return (
    <div className="flex flex-col overflow-auto">
      <h1>Comparateur</h1>
      <div className="">
        <table className="w-full table-fixed mt-4">
          <tbody>
            <tr>
              {comparator.map((p) => (
                <td key={p.pokedex_id} className="max-w-[100px] pb-4">
                  <div className="flex justify-center mb-4">
                    <ToggleComparatorButton pokemon={p} />
                  </div>
                  <PokemonDetailsHead pokemon={p} />
                </td>
              ))}
            </tr>
            <tr>
              {comparator.map((p) => (
                <td key={p.pokedex_id}>
                  <PokemonStats stats={p.stats} />
                </td>
              ))}
            </tr>
            <tr>
              {comparator.map((p) => (
                <td key={p.pokedex_id} className="align-top">
                  <div className="bg-foreground rounded p-2">
                    <PokemonTalents talents={p.talents} />
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              {comparator.map((p) => (
                <td key={p.pokedex_id}>
                  <PokemonResistancesTable resistances={p.resistances} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

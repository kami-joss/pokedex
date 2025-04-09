"use client";
import { Pokemon } from "@/lib/interface";
import {
  ComparatorContextInterface,
  useComparator,
} from "@/lib/providers/ComparatorProvider";

export default function ToggleComparatorButton({
  pokemon,
}: {
  pokemon: Pokemon;
}) {
  const { toggle, isLoading, isInComparator } =
    useComparator() as ComparatorContextInterface;

  return isLoading ? null : (
    <div className="hidden xl:block">
      <button
        type="button"
        className={`btn ${
          isInComparator(pokemon.pokedex_id) ? "btn-outline" : " btn-contrast"
        }`}
        onClick={() => toggle(pokemon.pokedex_id)}
      >
        {isInComparator(pokemon.pokedex_id)
          ? "Retirer du comparateur"
          : "Ajouter au comparateur"}
      </button>
    </div>
  );
}

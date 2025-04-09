import { Pokemon } from "@/lib/interface";
import InfoRow from "@/app/components/Pokemon/InfoRow";

export default function PokemonInfos({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col gap-2">
      <InfoRow label="Numéro National">{pokemon.pokedex_id}</InfoRow>
      <hr />
      <InfoRow label="Génération">{pokemon.generation}</InfoRow>
      <hr />
      <InfoRow label="Catégorie">{pokemon.category}</InfoRow>
      <hr />
      <InfoRow label="Taille">{pokemon.height}</InfoRow>
      <hr />
      <InfoRow label="Poids">{pokemon.weight}</InfoRow>
      <hr />
      <InfoRow label="Taux de capture">{pokemon.catch_rate}</InfoRow>
      <hr />
      <InfoRow label="Groupes d'œufs">{pokemon.egg_groups?.join(", ")}</InfoRow>
    </div>
  );
}

import { Pokemon } from "@/lib/interface";

export default function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col items-center">
      <h1>{pokemon.name.fr}</h1>
      <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
    </div>
  );
}

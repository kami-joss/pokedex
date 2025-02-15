import { Pokemon } from "@/lib/interface";
import Image from "next/image";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div
      key={pokemon.pokedex_id}
      className="w-full flex flex-col items-center p-2 hover:bg-gray-200"
    >
      <h1>{pokemon.name.fr}</h1>
      <Image
        src={pokemon.sprites.regular}
        alt={pokemon.name.fr}
        width={100}
        height={100}
      />
    </div>
  );
}

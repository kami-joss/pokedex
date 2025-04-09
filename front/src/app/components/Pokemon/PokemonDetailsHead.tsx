import { Pokemon } from "@/lib/interface";
import Image from "next/image";
import TypeBadge from "@/app/components/Type/TypeBadge";

export default function PokemonDetailsHead({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2>{pokemon.name.fr}</h2>
      <span>{pokemon.name.en}</span>
      <span>{pokemon.name.jp}</span>
      <Image
        src={pokemon.sprites.regular}
        alt={pokemon.name.fr}
        height={300}
        width={300}
      />
      <div className="flex gap-1">
        {pokemon.types?.map((type) => (
          <TypeBadge key={type.name} name={type.name} />
        ))}
      </div>
    </div>
  );
}

import { Pokemon } from "@/lib/interface";
import Image from "next/image";

type Props = {
  pokemon: Pokemon | undefined;
};

export default function PokemonMiniCard({ pokemon }: Props) {

  return pokemon ? (
    <div
      className="flex flex-col items-center gap-2"
    >
      <Image
        src={pokemon.sprites.regular}
        alt={pokemon.name.fr}
        height={100}
        width={100}
      />
      <span>{pokemon.name.fr}</span>
    </div>
  ) : null;
}

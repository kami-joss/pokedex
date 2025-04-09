import { Pokemon } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

export default function SearchPreview({
  pokemons,
}: {
  pokemons: Pokemon[] | undefined;
}) {
  return pokemons ? (
    <div className="relative">
      <div
        className="w-full bg-foreground border-2 absolute opacity-90 top-0 cursor-pointer flex flex-col rounded"
        id="search-preview"
      >
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Link
              key={"search-preview-" + pokemon.pokedex_id}
              href={`/pokemons/${pokemon.pokedex_id}`}
            >
              <div className="flex items-center gap-2 p-1 rounded hover:bg-background">
                <Image
                  src={pokemon.sprites.regular}
                  alt={pokemon.name.fr}
                  width={50}
                  height={50}
                />
                {pokemon.name.fr}
              </div>
            </Link>
          ))}
        {pokemons.length === 0 && (
          <div className="text-center text-gray-500">
            Aucuns résultats trouvés
          </div>
        )}
      </div>
    </div>
  ) : null;
}

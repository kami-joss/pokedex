import PokemonsListGeneration from "@/app/components/Generation/PokemonsListGeneration";
import PokemonDetails from "@/app/components/Pokemon/PokemonDetails";
import PokemonMiniCard from "@/app/components/Pokemon/PokemonMiniCard";
import { Pokemon } from "@/lib/interface";
import PokemonsListProvider from "@/lib/providers/PokemonstListProvider";
import pokemonFilters from "@/lib/utils/pokemonFilters";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    generation: string;
  }>;
  searchParams: Promise<{
    pokedex_id: string;
  }>;
}

export default async function generationPage({ searchParams, params }: Props) {
  const { pokedex_id } = await searchParams;
  const { generation } = await params;

  const pokemonList: Pokemon[] = await fetch(
    `https://tyradex.vercel.app/api/v1/gen/${generation}`,
    {
      cache: "force-cache",
    }
  ).then((res) => res.json());

  const currentPokemon = pokedex_id
    ? pokemonFilters.getPokemonById(
        pokedex_id ? parseInt(pokedex_id) : 1,
        pokemonList
      )
    : pokemonList[0];

  if (!currentPokemon) {
    notFound();
    return;
  }

  return (
    <div className="flex overflow-hidden">
      <PokemonsListProvider>
        <div className="xl:flex hidden">
          <PokemonsListGeneration pokemonList={pokemonList} />
          <PokemonDetails pokemon={currentPokemon} />;
        </div>
        <div className="xl:hidden block flex-grow overflow-auto p-2">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {pokemonList.map((pokemon) => (
              <Link
                key={pokemon.pokedex_id}
                href={`/pokemons/${pokemon.pokedex_id}`}
                className="bloc"
              >
                <PokemonMiniCard pokemon={pokemon} />
              </Link>
            ))}
          </div>
        </div>
      </PokemonsListProvider>
    </div>
  );
}

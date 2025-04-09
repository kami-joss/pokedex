import PokemonDetails from "@/app/components/Pokemon/PokemonDetails";
import pokemonFilters from "@/lib/utils/pokemonFilters";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ pokedex_id: string }>;
}

export default async function PokedexIdPage({ params }: Props) {
  const { pokedex_id } = await params;

  const pokemonList = await fetch("https://tyradex.vercel.app/api/v1/pokemon", {
    cache: "force-cache",
  }).then((res) => res.json());

  const currentPokemon = pokemonFilters.getPokemonById(
    pokedex_id ? parseInt(pokedex_id) : 1,
    pokemonList
  );

  if (!currentPokemon) {
    notFound();
    return;
  }

  return <PokemonDetails pokemon={currentPokemon} />;
}

import Pokedex from "@/app/components/Pokemon/Pokedex";

export default async function Home() {
  const data = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
  const pokemonList = await data.json();

  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto">
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
}

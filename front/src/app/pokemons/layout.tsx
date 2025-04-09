import PokemonsListNavigation from "@/app/components/Pokedex/PokemonsListNavigation";
import PokemonsListProvider from "@/lib/providers/PokemonstListProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pokemonList = await fetch("https://tyradex.vercel.app/api/v1/pokemon", {
    cache: "force-cache",
  }).then((res) => res.json());

  return (
    <div className="flex overflow-hidden">
      <PokemonsListProvider>
        <div className="flex flex-grow">
          <PokemonsListNavigation pokemonList={pokemonList} />
          {children}
        </div>
      </PokemonsListProvider>
    </div>
  );
}

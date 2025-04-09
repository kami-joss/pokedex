import Link from "next/link";
import Drawer from "@/app/components/UI/Drawer";
import { GenerationInterface } from "@/lib/interface";

export default function DrawerNav({
  generations,
  drawerIsOpen,
  setDrawerIsOpen,
}: {
  generations: GenerationInterface[];
  drawerIsOpen: boolean;
  setDrawerIsOpen: (value: boolean) => void;
}) {
  return (
    <Drawer isOpen={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
      <div className="flex flex-col">
        <Link
          href={"/pokemons"}
          onClick={() => setDrawerIsOpen(false)}
          className="w-full text-center p-2 border-b-2 border-background hover:bg-foreground rounded"
        >
          Toutes générations
        </Link>
        {generations.map((gen) => (
          <Link
            key={gen.generation}
            href={`/generations/${gen.generation}`}
            onClick={() => setDrawerIsOpen(false)}
            className="w-full text-center p-2 border-b-2 border-background hover:bg-foreground rounded"
          >
            Génération {gen.generation}
          </Link>
        ))}
      </div>
    </Drawer>
  );
}

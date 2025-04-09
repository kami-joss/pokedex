"use client";
import { GenerationInterface } from "@/lib/interface";
import Link from "next/link";
import Badge from "@/app/components/UI/Badge";
import { usePathname } from "next/navigation";

interface Props {
  generations: GenerationInterface[];
}

export default function GenNavigation({ generations }: Props) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center space-x-4">
      <Link href={"/pokemons"} className="text-lg">
        <Badge color={pathname.includes("/pokemons") ? "warning" : "contrast"}>
          Toutes générations
        </Badge>
      </Link>
      {generations.map((gen) => (
        <Link
          key={gen.generation}
          href={`/generations/${gen.generation}`}
          className="text-lg"
        >
          <Badge
            color={
              pathname === `/generations/${gen.generation}`
                ? "warning"
                : "contrast"
            }
          >
            Génération {gen.generation}
          </Badge>
        </Link>
      ))}
    </nav>
  );
}

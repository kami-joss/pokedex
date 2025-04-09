import { PokemonTalentInterface } from "@/lib/interface";
import Badge from "@/app/components/UI/Badge";

export default function PokemonTalents({
  talents,
}: {
  talents: PokemonTalentInterface[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
        {talents?.map((talent) => (
          <div
            key={talent.name}
            className="gap-2 grid grid-cols-12 items-center"
          >
            <span className="font-bold bg-background p-2 rounded w-full col-span-10">
              {talent.name}
            </span>
            {talent.tc ? (
              <div className="col-span-2">
                <Badge key={talent.name} color="primary">
                  <span className="hidden md:block">Talent caché</span>
                  <span className="block md:hidden">TC</span>
                </Badge>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

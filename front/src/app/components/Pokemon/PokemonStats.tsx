import { PokemonStatsInterface } from "@/lib/interface";
import DataBar from "@/app/components/UI/DataBar";

export default function PokemonStats({
  stats,
}: {
  stats: PokemonStatsInterface;
}) {
  const statLabels = {
    hp: "HP",
    atk: "Attaque",
    def: "Défense",
    spe_atk: "Attaque Spéciale",
    spe_def: "Défense Spéciale",
    vit: "Vitesse",
  };

  return (
    <section className="bloc col-span-2 lg:col-span-1">
      <h3>Statistiques</h3>
      <div className="flex flex-col gap-2">
        {(Object.keys(statLabels) as (keyof PokemonStatsInterface)[]).map(
          (key) => (
            <DataBar
              key={key}
              max={250}
              value={stats?.[key]}
              label={statLabels[key]}
            />
          )
        )}
      </div>
    </section>
  );
}

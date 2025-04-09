import { PokemonResistanceInterface } from "@/lib/interface";
import TypeBadge from "@/app/components/Type/TypeBadge";

type Props = {
  resistances: PokemonResistanceInterface[] | null;
};
export default function PokemonResistancesTable({ resistances }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="border-separate border-spacing-1 w-full">
        <thead>
          <tr>
            {resistances?.map((res) => (
              <th key={res.name}>
                <TypeBadge name={res.name} fullWidth />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {resistances?.map((res) => (
              <td key={res.name}>
                <div className="text-center bg-background rounded p-2">
                  x{res.multiplier}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

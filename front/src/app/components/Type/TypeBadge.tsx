import { pokemonTypesEnum, typesColorsEnum } from "@/lib/enums";
import { TypesContext, useTypes } from "@/lib/providers/TypesProvider";
import Image from "next/image";

type Props = {
  name: keyof typeof pokemonTypesEnum;
  fullWidth?: boolean;
};

export default function TypeBadge({ name, fullWidth = false }: Props) {
  const { getTypeByName } = useTypes() as TypesContext;
  const type = getTypeByName(name);

  if (!type) {
    return null;
  }

  return (
    <span
      className={`inline-flex flex-wrap justify-center gap-2 items-center rounded-md p-2 text-xs font-medium ring-1 ring-gray-500/10 ring-inset ${
        typesColorsEnum[type.name.fr]
      } ${fullWidth ? "w-full" : ""}`}
    >
      {type.sprites ? (
        <Image
          src={type.sprites}
          alt={type.name.fr}
          width={24}
          height={24}
          className="rounded-xl"
        />
      ) : null}
      {type.name.fr}
    </span>
  );
}

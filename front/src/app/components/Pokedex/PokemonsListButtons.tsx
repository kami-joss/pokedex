"use client";
import {
  PokemonsListContextInterface,
  usePokemonsList,
} from "@/lib/providers/PokemonstListProvider";
import LockIcon from "@/app/components/UI/Icons/LockIcon";
import UnlockIcon from "@/app/components/UI/Icons/UnlockIcon";
import OpenIcon from "@/app/components/UI/Icons/OpenIcon";

export default function PokemonsListButtons() {
  const { isOpen, setIsOpen, isOpenFull, setIsOpenFull } =
    usePokemonsList() as PokemonsListContextInterface;

  return (
    <div className="flex w-full bg-foreground rounded-tr">
      <button
        className="w-full border flex justify-center items-center p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <LockIcon /> : <UnlockIcon />}
      </button>
      {isOpen ? (
        <button
          className="w-full border flex justify-center items-center p-2 rounded-tr"
          onClick={() => setIsOpenFull(!isOpenFull)}
        >
          <div className={`${isOpenFull ? "rotate-180" : ""}`}>
            <OpenIcon />
          </div>
        </button>
      ) : null}
    </div>
  );
}

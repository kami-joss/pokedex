"use client";
import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

export interface PokemonsListContextInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isOpenFull: boolean;
  setIsOpenFull: (isOpenFull: boolean) => void;
}

const PokemonsListContext = createContext({});

export const usePokemonsList = () => useContext(PokemonsListContext);

export default function PokemonsListProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenFull, setIsOpenFull] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsOpenFull(false);
    }
  }, [isOpen]);

  return (
    <PokemonsListContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isOpenFull,
        setIsOpenFull,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </PokemonsListContext.Provider>
  );
}

"use client";
import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}
export interface ComparatorContextInterface {
  comparator: number[];
  isInComparator: (pokedexId: number) => boolean;
  add: (pokemonId: number) => void;
  remove: (pokemonId: number) => void;
  toggle: (pokemonId: number) => void;
  isLoading: boolean;
}

const ComparatorContext = createContext({});

export const useComparator = () => useContext(ComparatorContext);

const comparatorKey = "comparator";

export default function ComparatorProvider({ children }: Props) {
  const [value, setValue] = useState((): number[] => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(comparatorKey);
      return item ? JSON.parse(item) : [];
    }
    return [];
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const setComparator = (newVal: number[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(comparatorKey, JSON.stringify(newVal));
      setValue(newVal);
    }
  };

  const toggle = (pokemonId: number) => {
    if (typeof window !== "undefined") {
      if (!value?.includes(pokemonId)) {
        add(pokemonId);
      } else {
        remove(pokemonId);
      }
    }
  };

  const add = (pokemonId: number) => {
    if (typeof window !== "undefined") {
      const newComparator = [...value, pokemonId];
      setComparator(newComparator);
    }
  };

  const remove = (pokemonId: number) => {
    if (typeof window !== "undefined") {
      const newComparator = value.filter((id) => id !== pokemonId);
      setComparator(newComparator);
    }
  };

  const isInComparator = (pokedexId: number) => {
    return value?.some((id) => id === pokedexId) || false;
  };

  return (
    <ComparatorContext.Provider
      value={{
        add,
        remove,
        toggle,
        isLoading,
        comparator: value,
        isInComparator,
      }}
    >
      <Suspense fallback={<div>...loading</div>}>{children}</Suspense>
    </ComparatorContext.Provider>
  );
}

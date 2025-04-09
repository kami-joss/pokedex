"use client";
import { TypeInterface } from "@/lib/interface";
import { createContext, Suspense, useContext } from "react";

export interface TypesContext {
  types: TypeInterface[];
  getTypeByName: (name: string) => TypeInterface | undefined;
}
interface Props {
  types: TypeInterface[];
  children: React.ReactNode;
}

const TypesContext = createContext({});

export const useTypes = () => useContext(TypesContext);

export default function TypesProvider({ types, children }: Props) {
  const getTypeByName = (name: string): TypeInterface | undefined => {
    return types.find((type) => type.name.fr === name);
  };

  return (
    <TypesContext.Provider value={{ types, getTypeByName }}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </TypesContext.Provider>
  );
}

import { typesColorsEnum, pokemonTypesEnum } from "@/lib/enums";

export interface PokemonStatsInterface {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface statLabels {
  hp: "HP";
  atk: "Attaque";
  def: "Défense";
  spe_atk: "Attaque Spéciale";
  spe_def: "Défense Spéciale";
  vit: "Vitesse";
}

export interface PokemonEvolutionInterface {
  condition: string;
  name: string;
  pokedex_id: number;
}
export interface PokemonMegaEvolutionInterface {
  orbe: string;
  sprites: {
    regular: string;
    shiny: string;
  };
}
export interface PokemonResistanceInterface {
  name: keyof typeof pokemonTypesEnum;
  multiplier: number;
}
export interface PokemonTalentInterface {
  name: string;
  tc: boolean;
}
export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: { fr: string; en: string; jp: string };
  sprites: {
    regular: string;
    shiny: string;
    gmax: string | null;
  };
  types: PokemonTypeInterface[] | null;
  talents: PokemonTalentInterface[];
  stats: PokemonStatsInterface;
  resistances: PokemonResistanceInterface[];
  evolution: {
    pre: PokemonEvolutionInterface[] | null;
    next: PokemonEvolutionInterface[] | null;
    mega: PokemonMegaEvolutionInterface | null;
  } | null;
  catch_rate: number;
  egg_groups: string[] | null;
  formes: string[] | null;
  height: string;
  level_100: number;
  sexe: PokemonSexeInterface;
  weight: string;
}

export interface PokemonSexeInterface {
  female: number;
  male: number;
}

export interface GenerationInterface {
  generation: number;
  from: number;
  to: number;
}

export interface PokemonTypeInterface {
  image: string;
  name: keyof typeof typesColorsEnum;
}

export interface TypeInterface {
  id: number;
  name: {
    en: string;
    fr: keyof typeof typesColorsEnum;
    jp: string;
  };
  sprites: string;
  resistances: PokemonResistanceInterface[];
}

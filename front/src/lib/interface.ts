export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: { fr: string; en: string; jp: string };
  toto: string;
  sprites: {
    regular: string;
    shiny: string;
    gmax: string | null;
  };
  // types: [[Object]];
  // talents: [[Object], [Object], [Object]];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  // resistances: [
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object],
  //   [Object]
  // ];
  // evolution: { pre: null; next: [Array]; mega: null };
  // height: "0,4 m";
  // weight: "6,5 kg";
  // egg_groups: ["Aquatique 3"];
  // sexe: { male: 50; female: 50 };
  // catch_rate: 225;
  // level_100: 1000000;
  // formes: null;
}

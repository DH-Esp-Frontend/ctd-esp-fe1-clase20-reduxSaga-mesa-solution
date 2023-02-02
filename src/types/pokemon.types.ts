interface Sprite{
    other:{ home:{ front_default:string }};
}
export interface PokemonWithProps extends Pokemon{
    id: number;
    sprites: Sprite;
}
interface Stats {
  base_stat: number;
  stat: { name: string };
}
interface Types {
  type: { name: string };
}

export interface Pokemon {
  results:{
    name: string;
    url: string;
    id: number;
    sprites: Sprite;
    types: Types[];
    stats: Stats[];
  }
  json(): unknown;
  loading: boolean;
}
export interface PokemonsState {
  search: Pokemon;
  allPokemons: any[];
}

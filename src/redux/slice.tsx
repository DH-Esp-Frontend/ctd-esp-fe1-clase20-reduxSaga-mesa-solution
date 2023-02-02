import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PokemonsState,Pokemon } from "../types/pokemon.types";

let other = { home:{ front_default:"" } };
let stats = { base_stat: 0, stat: { name: "" } };
let type = { type: { name: "" } };

export interface Result{ result:[] }

const initialState: PokemonsState = {
  search: {
    results: {
      name: "",
      url: "",
      id: 0,
      sprites: { other },
      stats: [ stats ],
      types: [ type ],
    },
    loading: false,
    json(){},
  },
  allPokemons: [],
};


export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.allPokemons.push(action.payload);
      state.search.loading = false;
    },
    getPokemon: (state, action) => {
      state.search.loading = false;
      state.search.results = action.payload;
    },
    getAllPokemons: (state) => {
      state.search.loading = true;
    },
    getOnePokemon: (state, _action) => {
      state.search.loading = true;
    },
  },
});


export const { getPokemon, getOnePokemon,getAllPokemons, getPokemons } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;

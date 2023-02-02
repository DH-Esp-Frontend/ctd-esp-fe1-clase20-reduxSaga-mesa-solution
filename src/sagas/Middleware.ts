import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemon, getPokemons } from "../redux/slice";
import { Pokemon } from "../types/pokemon.types"
import type { PayloadAction } from "@reduxjs/toolkit";


function* fetchData() {
  try {
    const res: Pokemon = yield call( () => fetch("https://pokeapi.co/api/v2/pokemon?limit=151") );
    const { results } = yield res.json();
    yield put(getPokemons(results));
  } catch (error) {
    console.error("fetchData",error);
  }
}
function* fetchOnePokemon(action: PayloadAction) {
  try {
    const res: Pokemon = yield call(() => fetch(`https://pokeapi.co/api/v2/pokemon/${ action.payload }/`));
    const data: Pokemon = yield res.json();
    yield put(getPokemon(data));
  } catch (error) {
    console.error("fetchOnePokemon",error);
  }
}



export function* fetchSaga() {
  yield takeEvery("pokemons/getOnePokemon", fetchOnePokemon);
  yield takeEvery("pokemons/getAllPokemons", fetchData);
}

    
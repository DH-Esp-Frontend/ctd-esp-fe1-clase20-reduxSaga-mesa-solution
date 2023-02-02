import React, { useEffect } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { getAllPokemons } from "../redux/slice";
import { AppDispatch } from "../redux/store";

const ListadoPokemons = () => {
  const { search,allPokemons } = useSelector(( state: RootState ) => state );
  const dispatch:AppDispatch = useDispatch();


  const fetchPokemon = () => dispatch(getAllPokemons());


  useEffect(() => {
    if (allPokemons.length == 0) fetchPokemon();
  }, []);

  if (search.loading) return <div> Loading... </div>;

  return <ListadoPokemonsItem />;
}

export default ListadoPokemons;

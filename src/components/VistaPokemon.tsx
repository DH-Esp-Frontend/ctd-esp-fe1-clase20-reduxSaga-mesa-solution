import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const VistaPokemon = () => {

  const { search } = useSelector(( state: RootState ) => state);
  const { name, types, sprites, stats,id } = search?.results;
  const { other:{ home:{ front_default } } } = sprites;
  
  return name ? (
    <div className="vistaPokemon">
      <h4 className="pokemonName">
        {name.toUpperCase()} #{id}
      </h4>
      {types.map(({ type: { name } }) => (
        <span className={`typeName ${name}`} key={name}>{name.toUpperCase()}</span>
      ))}
      <img src={front_default} alt={name} />
      {stats.map(({ stat: { name }, base_stat }) => (
        <p key={name}>
          <span>{name}:</span> {base_stat}
        </p>
      ))}
    </div>
  ) : null;
}


export default VistaPokemon;

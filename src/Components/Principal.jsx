import { useEffect, useState } from 'react';
import "./Principal.css"
const Poke = () => {
  const [pokemons, setPokemons] = useState([]);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);
  const [urlApi, setUrlApi] = useState('https://pokeapi.co/api/v2/pokemon');

  useEffect(() => {
    consumirApi();
  }, []);

  const consumirApi = () => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => {
        setDisabledPrev(!data.previous);
        setDisabledNext(!data.next);

        const promises = data.results.map((pokemon) => {
          return fetch(pokemon.url).then((res) => res.json());
        });

        Promise.all(promises).then((pokemonData) => {
          setPokemons(pokemonData);
        });
      })
      .catch((error) => console.log(error));
  };

  const paginar = (url) => {
    console.log(url)
    setUrlApi(url);
    console.log(urlApi)
  };

  return (
    <div>
      <div id="contenedor-pokemon">
        {pokemons.map((pokemon, index) => (
          <div key={index} className={`col-lg-6 ${index % 2 === 0 ? 'alt' : ''}`}>
            <div className="blog-card">
              <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}></div>
                <ul className="details">
                  <p className="text-center">Abilities</p>
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="author">
                      {ability.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="description">
                <h1>{pokemon.name}</h1>
                <p></p>
                <ul className="list-group list-group-horizontal-sm">
                  <li className="list-group-item">Order</li>
                  <li className="list-group-item">Weight</li>
                  <li className="list-group-item">Height</li>
                  <li className="list-group-item">Base_experience</li>
                </ul>
                <ul className="list-group list-group-horizontal-sm text-center">
                  <li className="list-group-item" style={{ minWidth: '75px' }}>
                    {pokemon.order}
                  </li>
                  <li className="list-group-item" style={{ minWidth: '82.5px' }}>
                    {pokemon.height}
                  </li>
                  <li className="list-group-item" style={{ minWidth: '79.25px' }}>
                    {pokemon.weight}
                  </li>
                  <li className="list-group-item" style={{ minWidth: '156.65px' }}>
                    {pokemon.base_experience}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="paginacion">
        <button
          className="btn btn-warning text-white"
          disabled={disabledPrev}
          onClick={() => paginar(pokemons[0]?.abilities[0]?.ability.url)}
        >
          <i className="fas fa-backward"></i> Anterior
        </button>
        <button
          className="btn btn-warning text-white"
          disabled={disabledNext}
          onClick={() => paginar(pokemons[0]?.abilities[0]?.ability.url)}
        >
          Siguiente <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default Poke;

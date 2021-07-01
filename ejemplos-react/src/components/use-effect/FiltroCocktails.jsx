import { useEffect } from 'react';
import { useState } from 'react';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const FiltroCocktails = () => {

  const [filtro, setFiltro] = useState('')
  const [listaCocktails, setListaCocktails] = useState([])
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    if (filtro.length > 3) {
      fetch(URL + filtro)
        .then(resp => resp.json())
        .then(datos => {
          setListaCocktails(datos.drinks || [])
        })
    }
  }, [filtro])

  return (
    <div>
      <input type="text" value={filtro} onChange={event => setFiltro(event.target.value)}/>
      <hr/>
      <ul>
        {listaCocktails.map(c => {
          return <li key={c.idDrink} onClick={() => setCocktail(c)}>{c.strDrink}</li>
        })}
      </ul>
      {cocktail && 
        <div>
          <h2>{cocktail.strDrink}</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
      }
    </div>
  )
}

export default FiltroCocktails

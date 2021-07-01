import { useEffect } from 'react';
import FiltroCocktails from './FiltroCocktails';

const UseEffect = () => {
  

  useEffect(() => {
    // Se ejecuta cuando el componente se va a destruir
    return () => {
      
    }

  }, [])

  return (
    <div>
      <h1>useEffect</h1>
      <FiltroCocktails />
    </div>
  )
}

export default UseEffect

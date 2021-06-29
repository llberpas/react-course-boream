import { useState } from 'react';
import Sugus from '../props-state-eventos/Sugus';

const infoSugus = [
  { id: 0, color: 'yellow', sabor: 'Limón'},
  { id: 1, color: 'orange', sabor: 'Naranja'},
  { id: 2, color: 'red', sabor: 'Fresa'},
  { id: 3, color: 'blue', sabor: 'Piña'},
]

const CondicionalesYListas = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  const listaSugus = infoSugus.map((sugus, index) => {
    return <Sugus key={sugus.id} color={sugus.color} sabor={sugus.sabor}/>
  })

  return (
    <div>
      <h1>Condicionales</h1>
      {mostrarMensaje ? <p>El canario esta en la jaula...</p> : <p>No puedes ver el mensaje</p>}
      {mostrarMensaje && <p>El canario esta en la jaula...</p>}

      <button type="button" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? 'Ocultar' : 'Mostrar'} mensaje
      </button>

      <h1>Listas</h1>
      {listaSugus}

    </div>
  )
}

export default CondicionalesYListas

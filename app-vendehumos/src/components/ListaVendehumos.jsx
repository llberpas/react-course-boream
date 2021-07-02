import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const ListaVendehumos = () => {

  const vendehumos = useSelector(state => {
    console.log(state.vendehumos.vendehumos)

    return state.vendehumos.vendehumos
  })

  return (
    <div>
      <h2>Vota a tu vendehumos favorito</h2>
      <ul>
        {vendehumos.map(vh => <Link key={vh.id} to={'/vendehumos/' + vh.id}>{vh.nombre}</Link>)}
      </ul>
    </div>
  )
}

export default ListaVendehumos

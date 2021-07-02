const ListaUsuarios = ({ datos }) => {

  const listaUsuarios = datos.map(u => <li key={u.id}>{u.name}</li>)

  return (
    <div>
      {listaUsuarios}
    </div>
  )
}

export default ListaUsuarios

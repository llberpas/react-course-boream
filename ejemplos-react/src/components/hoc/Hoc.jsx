import React, { Component } from "react"
import { withData } from './withData'
import ListaUsuarios from './ListaUsuarios'

const Loader = () => <p>Cargando...</p>

class Hoc extends Component {
  render() {

    const ListaUsuariosConDatos = withData(ListaUsuarios, 
      'http://jsonplaceholder.typicode.com/users', Loader)
    return (
      <div>
        <h1>Higher order components</h1>
        <ListaUsuariosConDatos />
      </div>
    )
  }
}

export default Hoc

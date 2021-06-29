import { Component } from 'react'

class CmpDeClase extends Component {
  constructor(props) {
    super(props)
    // We usually init the state in the constructor
    this.state = {}
  }

  // metodo comun a los componentes de clase que define lo que se va a pintar
  render() {
    return <h2>Esto es un componente de clase</h2>
  }
}

export default CmpDeClase
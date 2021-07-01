import Acordeon from "./Acordeon"

const PropChildren = () => {
  return (
    <div>
      <h1>Prop Children</h1>
      <Acordeon titulo="¿Qué es react?">
        <p>Es una libreria de JS...</p>
        <img src="http://sigdeletras.com/images/blog/202004_react_leaflet/react.png" alt="React"/>
      </Acordeon>
      <Acordeon titulo="Ingredientes mojito">
        <ul>
          <li>Tequila</li>
          <li>Triple sec</li>
          <li>Lemon juice</li>
          <li>Salt</li>
        </ul>
      </Acordeon>
    </div>
  )
}

export default PropChildren

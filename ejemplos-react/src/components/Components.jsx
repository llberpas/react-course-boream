const styles = {
  h2: {
    color: 'red',
    backgroundColor: 'grey'
  }
}

const Componentes = () => {
  const nombre = "Charly"
  const getNombre = () => nombre

  return (
    <div>
      <h1>Tipos de componentes</h1>
      <h2 style={styles.h2}>Esto es un componente funcional</h2>
      <p>Bienvenido {getNombre()}</p>
      <input type="text" placeholder={nombre}></input>
    </div>
  )
}

export default Componentes
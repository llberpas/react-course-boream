// Formulario controlado por react: el valor de cada campo depende del estado en que se encuentra el componente.
// Se usan componentes controlados (onChange)
// Si se hace un submit, se recarga la pagina y perdemos el estado.
import {useState} from 'react'

const Formulario = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChangeUsername = (event) => setUsername(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    const datosFormulario = {
      username,
      password
    }
    console.log(datosFormulario)
  }

  return (
    <div>
      <h1>Formularios</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleOnChangeUsername} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default Formulario

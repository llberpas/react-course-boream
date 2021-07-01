import { useState } from 'react'
import { useCampoFormulario } from './useCampoFormulario'

const FormularioConHooks = () => {

  const {valor: username, handleOnChange: handleOnChangeUsername, errores: erroresUsername} = useCampoFormulario('')
  const {valor: password, handleOnChange: handleOnChangePassword, errores: erroresPassword} = useCampoFormulario('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const datosFormulario = {
      value,
      password
    }
    console.log(datosFormulario)
  }

  const pintaErroresUsername = erroresUsername ? erroresUsername.map(e => <p key="">{e}</p>) : []
  const pintaErroresPassword = erroresPassword ? erroresPassword.map(e => <p key="">{e}</p>) : []

  return (
    <div>
      <h1>Formulario con hooks</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleOnChangeUsername} />
          {pintaErroresUsername}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handleOnChangePassword} />
          {pintaErroresPassword}
        </div>
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default FormularioConHooks
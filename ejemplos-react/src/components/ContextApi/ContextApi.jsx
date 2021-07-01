import { createContext, useState } from 'react'
import DatosUsuario from "./DatosUsuario"

export const DarkModeContext = createContext(false)

const ContextApi = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <h1>Context Api (Dark Mode)</h1>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>Alternar modo oscuro</button>
      <DarkModeContext.Provider value={darkMode}>
        <DatosUsuario />
      </DarkModeContext.Provider>
    </div>
  )
}

export default ContextApi

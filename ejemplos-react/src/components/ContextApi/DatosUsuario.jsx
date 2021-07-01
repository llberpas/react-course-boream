import { useContext } from 'react'
import { DarkModeContext } from './ContextApi'

const styles = {
  true: {
    backgroundColor: 'black',
    color: 'white'
  },
  false: {
    backgroundColor: 'white',
    color: 'black'
  }
}

const DatosUsuario = () => {
  const darkMode = useContext(DarkModeContext)

  return (
    <div style={styles[darkMode]}>
      <p>El darkMode está {darkMode ? 'activado' : 'desactivado'}</p>
    </div>
  )
}

export default DatosUsuario

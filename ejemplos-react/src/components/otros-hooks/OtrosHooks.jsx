import { useState, useMemo, useEffect } from 'react'
import Color from './Color'

const OtrosHooks = () => {

  const [cuenta, setCuenta] = useState(0)
  const [cuentaAnterior, setCuentaAnterior] = useState(null)
  const [color, setColor] = useState('green')

  useEffect(() => {
    if(cuentaAnterior < 0 && cuenta >= 0) {
      setColor('green')
    } else if(cuentaAnterior >= 0 && cuenta < 0) {
      setColor('red')
    }
  }, [cuenta])

  const ColorMemorized = useMemo(() => {
    console.log('Se calcula otra vez')
    return () => <Color color={color} />
  }, [color])

  const handleChange = (event) => {
    setCuentaAnterior(cuenta)
    const nuevaCuenta = Number(event.target.value)
    setCuenta(nuevaCuenta)
  }

  return (
    <div>
      <h1>Otros Hooks</h1>
      <input type="number" value={cuenta} onChange={handleChange} />
      {cuenta !== 0 && <ColorMemorized />}
    </div>
  )
}

export default OtrosHooks

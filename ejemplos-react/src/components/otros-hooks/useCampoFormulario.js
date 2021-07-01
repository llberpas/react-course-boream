import { useEffect, useState } from 'react'

export const useCampoFormulario = (valorInicial) => {
  const [valor, setValor] = useState(valorInicial)
  const [errores, setErrores] = useState([])

  const longitudInsuficiente = 'Tiene que tener más de 2 letras'

  useEffect(() => {
    if (valor.length < 3) {
      if (!errores.includes(longitudInsuficiente)) {
        const nuevosErrores = [...(errores), longitudInsuficiente]
        setErrores(nuevosErrores)
      }
    } else {
      setErrores(errores.filter(e => e !== longitudInsuficiente))
    }
  }, [valor])

  const handleOnChange = (event) => setValor(event.target.value)
  return {
    valor,
    handleOnChange,
    errores
  }
}
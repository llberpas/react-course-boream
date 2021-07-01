import { useState } from 'react';

const CodigoSecreto = () => {

  const codigoSecreto = '1234'
  const [codigo, setCodigo] = useState('')

  const listaBotones = new Array(10).fill(null).map((val, i) => <button key={i} type="button">{i}</button>)

  const handleClick = (event) => {
    switch (event.target.textContent) {
      case 'CLD':
        setCodigo('')
        break;
      case 'DEL':
        const nuevoCodigo = codigo.slice(0, codigo.length - 1)
        setCodigo(nuevoCodigo)
        break;
      default:
        if (codigo.length < 4) {
          setCodigo(codigo + event.target.textContent)
        }
        break;
    }
  }

  return (
    <React.Fragment>
      <div onClick={handleClick}>
        <div>
          {listaBotones}
        </div>
        <div>
          <button type="button">CLD</button>
          <button type="button">DEL</button>
        </div>
      </div>
      <div>
        <div>{codigoSecreto === codigo ? 'CODIGO OK' : codigo}</div>
      </div>
    </React.Fragment>
  )
}

export default CodigoSecreto

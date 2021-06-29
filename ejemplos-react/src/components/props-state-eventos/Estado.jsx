import { useState } from 'react';

const Estado = () => {

  const [cuenta, setCuenta] = useState(0)

  const incrementar = () => setCuenta(cuenta + 1)

  const mostrarHref = (event) => {
    alert('Vas a ir a la pagina ' + event.target.href)
  }

  const handleClick = () => {
    const textoIntro = new Array(16).join(1-'wat') + ' Batman!';
    const configSpeech = new SpeechSynthesisUtterance(textoIntro);
    configSpeech.rate = 0.8;
    window.speechSynthesis.speak(configSpeech);
  }

  return (
    <div>
      <button type="button" onClick={() => setCuenta(cuenta - 1)}>-</button>
      Cuenta: {cuenta}
      <button type="button" onClick={incrementar}>+</button>
      <a href="http://www.google.es" onClick={mostrarHref}>Ir a Google</a>
      <button type="button" onClick={handleClick}>Batman!</button>
    </div>
  )
}

export default Estado

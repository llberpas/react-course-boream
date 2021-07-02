import { CREAR_VENDEHUMOS, INIT_VENDEHUMOS, VOTAR } from './action-types';

export const inicializarDatos = () => {
  console.log('inicializar')
  return {
    type: INIT_VENDEHUMOS,
    payload: [
      { id: 106, nombre: 'Payaso 1', tema: 'Apuestas' },
      { id: 42, nombre: 'Payaso 2', tema: 'Crypto' },
      { id: 6, nombre: 'Payaso 3', tema: 'Bolsa' }
    ]
  }
}

export const votar = (idVendehumos) => {
  return {
    type: VOTAR,
    payload: idVendehumos
  }
}

export const crearVendehumos = (nombre, tema) => {
  const vendehumos = {
    nombre,
    tema,
    numVotos: 0
  }

  return (dispatch) => {
    return fetch('https://ejemplos-dc1c1.firebaseio.com/vendehumos/Godzilla.json', {
      method: 'POST',
      body: JSON.stringify(vendehumos)
    })
      .then(resp => resp.json())
      .then(({ name }) => {
        dispatch({
          type: CREAR_VENDEHUMOS,
          payload: {
            ...vendehumos,
            id: name
          }
        })
      })
  }
}
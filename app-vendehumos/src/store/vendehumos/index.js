import { CREAR_VENDEHUMOS, INIT_VENDEHUMOS } from './action-types'

const initalState = {
  vendehumos: []
}

const addVendehumos = (state, payload) => {
  const nuevoCendehumos = [...state.vendehumos, payload]
  return {
    ... state,
    vendehumos: nuevoCendehumos
  }
}

export default function vendehumos(state = initalState, action) {
  switch (action.type) {
    case INIT_VENDEHUMOS:
      return { ...state, vendehumos: action.payload }
    case CREAR_VENDEHUMOS:
      return addVendehumos(state, action.payload)
    default:
      return { ...state }
  }
}
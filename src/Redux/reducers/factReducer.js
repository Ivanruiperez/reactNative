import actionTypes from '../actions/actionTypes'

export default function factReducer (state = {}, {type, data}) {
    let newState = null
    switch (type) {
        case actionTypes.LOAD_FACT:
            newState = { ...state, factText: data}
            break
        case actionTypes.SAVE_FACT:
            newState = { ...state, lovedFacts: [...state.lovedFacts, data]}
            break
        case actionTypes.REMOVE_FACT:
            const newLovedFacts = state.lovedFacts.filter((fact) => fact !== data )
            newState = { ...state, lovedFacts: newLovedFacts}
            break
        default:
            newState = state
            break
    }
    return newState
}
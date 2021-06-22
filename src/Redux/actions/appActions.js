import axios from 'axios'
import actionTypes from './actionTypes'

export function loadFact (fact) {
    return {
      type: actionTypes.LOAD_FACT,
      data: fact
    }  
}

export function loadError (error) {
    return {
      type: actionTypes.LOAD_ERROR,
      data: error
    }
}

export function requestFact () {
    return async (dispatch) => {
      const backEndpoint = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'
      try {
        const factData = await axios.get(backEndpoint)
        dispatch(loadFact(factData.data.text))
      } catch (error) {
        dispatch(loadError(error))
      }
    }
  }

export function saveFact (fact) {
    return {
        type: actionTypes.SAVE_FACT,
        data: fact
    }
}

export function removeFact (fact) {
    return {
        type: actionTypes.REMOVE_FACT,
        data: fact
    }
}
export default function(state = [], {type, payload} = {}) {
  switch(action.type) {
    case 'NEW_GAME' :
      return [].concat(action.payload)

      default :
        return state
  }
}

let defaultState = []

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        data: action.data,
      }
    case "DELETE":
      action.data.splice(action.data.length - 1, 1)
      return {
        ...state,
        data: action.data,
      }
    case "ADD":
      action.data.push(action.data[0])
      return {
        ...state,
        data: action.data,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer

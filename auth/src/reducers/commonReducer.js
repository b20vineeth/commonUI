

const initialStateContacts = {
  error:[]
}
 
export const commonReducer = (state = initialStateContacts, action) => {
  switch (action.type) {

    case "SAVE_ERROR":
       return Object.assign({}, state, { error: action.data })   
   
    default:
      return state
  }
}

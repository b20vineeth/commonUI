

const initialStateContacts = {
  error:[],
  loadingStatus:"false"
  
}
 
export const commonReducer = (state = initialStateContacts, action) => {
  switch (action.type) {

    case "SAVE_ERROR":
       return Object.assign({}, state, { error: action.data })   
    case "STORE_LOADING_STATUS":
     return Object.assign({}, state, { loadingStatus: action.data })   

          
   
    default:
      return state
  }
}

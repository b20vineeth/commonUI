import * as type from "../actions/action-type"
const initialStateContacts = {
  language: {
    langCode: "",
    langName: "",
    status: "",
    msg : ""
  }
}

export const languageReducer = (state = initialStateContacts, action) => {
  switch (action.type) {

    case type.STORE_LANGUAGE:
      return Object.assign({}, state, { language: action.data })
    case type.CLEAR_LANGUAGE:
      return Object.assign({}, state, { language: action.data })
      
    default:
      return state
  }
}

 

const initialStateContacts = {
  login:{
    username:"",
    password:"",
    status:""
  } 
}
 
export const loginReducer = (state = initialStateContacts, action) => {
 
  switch (action.type) {

    case "STORE_LOGIN_STATUS":
     {   debugger;
       return Object.assign({}, state, { login: action.data })   
     }
   
    default:
      return state
  }
}

import axios from 'axios' 
import * as env from '../config'


export function onLogin(values) {
     
   var config=window.getConfig();
   //console.log("config =>",config);
    const { dispatch, getState } = values;
    const state = getState();
 
    axios.post(config.domain + '/auth', state.form.LoginForm.values)
        .then(function (response) {
            var data={username:state.form.LoginForm.values.username,status: response.data.status}
          //  console.log(data);
            dispatch({ type: 'STORE_LOGIN_STATUS', data:data});
           // console.log(response.data.status);
        }).catch(error => {
            console.log(error);
        });

}
 


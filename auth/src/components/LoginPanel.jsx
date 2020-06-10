import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {common }   from 'mallureport-common-lib';

class LoginPanel extends Component {
  constructor(props) {
    super(props);
  }
 
  onLogin = () => {
     this.props.onLogin(); 
  } 
  render() {
    
    return (

      <React.Fragment>
 
         
          <Field
            name="username"
            type="text"
            component={common.renderField}
            label="User name" 
          />
           

         
         <Field
            name="password"
            type="password"
            component={common.renderField}
            label="Password" 
          />
            
         <div className="container-login100-form-btn m-t-20">
           <button className="login100-form-btn" onClick={this.onLogin}>
             Sign in
           </button>
         </div>
          
       
         <div className="error"> {this.props.status=="FAIL"?" Invalid Username or password":""} </div>
         {this.props.status=="SUCCESS"? window.location.reload():""}
    
      
      </React.Fragment> 
    )
  }
}
LoginPanel.propTypes = {
  onLogin: PropTypes.func
};
export default reduxForm({
  form: 'LoginForm'
})(LoginPanel)
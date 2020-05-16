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


        <form>
          <Field
            name="username"
            type="text"
            component={common.renderField}
            label="User Name" 
          />
          <Field
            name="password"
            type="password"
            component={common.renderField}
            label="Password" 
          />
           
          <button type="button" className="btn btn-block login-btn mb-4" onClick={this.onLogin}>Login</button>
 
          <div className="error"> {this.props.status=="FAIL"?" Invalid Username or password":""} </div>
          {this.props.status=="SUCCESS"? window.location.reload():""}
     
        </form>


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

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { common } from 'mallureport-common-lib' 

class LanguagePanel extends Component {
  constructor(props) {
    super(props);


  }
   
  onSave = () => {
    this.props.onSave();
  };
  
  render() {
    if(this.props.status=="Y")
    {
       window.alert("SuccessFully Saved");
       this.props.onClear();
    }

    return (

      <React.Fragment>
        <div align="right">

          <a href="/language">View</a>  &nbsp;  Create

        </div>

        <form>

          <div className="row">
            <div className="col"> </div>
            <div className="col-6">

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Language</h4>
                  <br></br>


                  <Field
                    name="langName"
                    type="text"
                    component={common.renderField}
                    label="Name"
                    validate={[common.StringValidation.alphaNumeric,
                      common.StringValidation.required, 
                      common.StringValidation.maxLength15, 
                      common.StringValidation.minLength3,]}
                    
                  />
                  <Field
                    name="langCode"
                    type="text"
                    component={common.renderField}   
                    label="Code" 
                    validate={[common.StringValidation.alphaNumeric,common.StringValidation.required, common.StringValidation.maxLength15, common.StringValidation.minLength3]}
                   // warn={common.StringValidation.alphaNumeric}
                  />
                 
 

                  <button type="button" className="btn btn-primary mr-2" onClick={this.onSave}>Submit</button>
                  <div className="errorMsg"> {this.props.status=="FAIL" ? this.props.msg :""}</div> 



                </div>
              </div>


            </div>
            <div className="col"> </div>
          </div>

        </form>


      </React.Fragment>





    )
  }
}
LanguagePanel.propTypes = {
  onSave: PropTypes.func
};
export default reduxForm({
  form: 'LangaugeForm'
})(LanguagePanel)

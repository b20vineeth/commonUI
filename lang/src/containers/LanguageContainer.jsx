
import { connect } from 'react-redux';
import LanguagePanel from '../components/LanguagePanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,onClear } from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({

  msg :state.languageReducer.language.msg ? state.languageReducer.language.msg : "",
  status: state.languageReducer.language.status ? state.languageReducer.language.status : "",
  initialValues:
  {
    langCode: state.languageReducer.language.langCode ? state.languageReducer.language.langCode : "",
    langName: state.languageReducer.language.langName ? state.languageReducer.language.langName : ""
  }

})


const mapDispatchToProps = (dispatch) => ({
  onSave: () => {
     dispatch(common.dispatchAction(onSave)())
  },
  onClear: () => {
   
    dispatch(common.dispatchAction(onClear)());
    dispatch(reset('LangaugeForm')); 
 }
})
export default connect(mapStateToProps, mapDispatchToProps)(LanguagePanel)
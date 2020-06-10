
import { connect } from 'react-redux';
import App from '../components/App';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import {readData} from '../actions/actions'
 
const mapStateToProps = (state, ownProps) => ({
  loadingStatus:state.commonReducer.loadingStatus
})
const mapDispatchToProps = (dispatch) => ({

  readData:()=>{
    dispatch(common.dispatchAction(readData)())
  } })
export default connect(mapStateToProps, mapDispatchToProps)(App)
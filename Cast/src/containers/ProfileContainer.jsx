import { connect } from 'react-redux';
import ProfilePanel from '../components/ProfilePanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,handleSearch,postData ,fileUpload,readData,validateProfileCode,updateRate} from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({
 
  profileLov:state.profileReducer.search.profileLov ,
  isPLoading:state.profileReducer.search.isPLoading ,
   
  language:state.profileReducer.defaultSelected.langs?state.profileReducer.defaultSelected.langs:[], 
  
  movie:state.profileReducer.defaultSelected.movie?state.profileReducer.defaultSelected.movie:[],
  
  languageLov:state.profileReducer.search.languageLov ,
  isLLoading:state.profileReducer.search.isLLoading ,
  saveStatus:state.profileReducer.saveStatus ,

  isMLoading:state.profileReducer.search.isMLoading ,
  movieLov:state.profileReducer.search.movieLov ,

  profileStatus:state.profileReducer.validate.profile,
  profileValStatus:state.profileReducer.validate.profileValStatus,

  saveBtn:state.commonReducer.savebtn,
  rate:state.profileReducer.profileForm.rate?state.profileReducer.profileForm.rate:0,
  initialValues:
  {
    profileCode:state.profileReducer.profileForm.profileCode?state.profileReducer.profileForm.profileCode:"",
    profileName:state.profileReducer.profileForm.profileName?state.profileReducer.profileForm.profileName:"",
    language:state.profileReducer.defaultSelected.langs?state.profileReducer.defaultSelected.langs:[],
    video:state.profileReducer.profileForm.video?state.profileReducer.profileForm.video:"",
    gallery:state.profileReducer.profileForm.gallery?state.profileReducer.profileForm.gallery:"",
    storyline:state.profileReducer.profileForm.storyline?state.profileReducer.profileForm.storyline:"",
    shortDesc:state.profileReducer.profileForm.shortDesc?state.profileReducer.profileForm.shortDesc:"",
    dob:state.profileReducer.profileForm.dob?state.profileReducer.profileForm.dob:"",
    
  }
  
})


const mapDispatchToProps = (dispatch) => ({

  updateRate:(rate)=>{ 
    var data={rate}
     dispatch(common.dispatchAction(updateRate)(rate))
  },
  readData:()=>{
    dispatch(common.dispatchAction(readData)())
  },
  validateProfileCode :()=>{
    dispatch(common.dispatchAction(validateProfileCode)())
  },
  onSave: () => {
     dispatch(common.dispatchAction(onSave)())
  },
  handleSearch :(query,key) =>{
    var data={query,key}
    dispatch(common.dispatchAction(handleSearch)(data))
  } ,
 fileUpload:(file)=>{
  
  dispatch(common.dispatchAction(fileUpload)(file));
 },
 postData: (data) => {
    dispatch(common.dispatchAction(postData)(data)); ; 
}})
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePanel)